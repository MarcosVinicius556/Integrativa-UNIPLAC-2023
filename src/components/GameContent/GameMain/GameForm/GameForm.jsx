import { useState, useEffect, useRef, useContext } from 'react';
import { GameContext } from '../../../../context/GameContext';
import './game-form.css'

function GameForm() {
  
  const [ textoDigitado, setTextoDigitado ] = useState('');
  const [ submitDisabled, setSubmitDisabled ] = useState(true);

  const { value:gameReducer } = useContext(GameContext);
  const [ state, dispatch ] = gameReducer;
  const { gameQuestion: perguntaAtual } = state;
  const { questoes } = state;

  const typedText = useRef('');
  const btnSubmit = useRef('');

  //Ao iniciar o game embaralha as questões
  useEffect(() => {
    dispatch({ type: 'startGame' })
  }, []);

  //A cada alteração de texto verifica se finalizou ou se houve erros
  useEffect(() => {
    const questao = questoes[perguntaAtual].question;
    let textSize = textoDigitado.length;

    validateTextoDigitado(questao.answer, textSize);
  }, [textoDigitado]);
  
  //Submit da questão
  const handleSubmitQuestion = (e) => {
    e.preventDefault();
    let proximaQuestao = perguntaAtual + 1;
    console.log('Questão: ' + proximaQuestao);
    console.log('Tamanho do array: ' + questoes.length);
    if(proximaQuestao >= questoes.length){
      dispatch({ type: 'victory' });
      dispatch({ type: 'correctAnswer' });
    } else {
      dispatch({ type: 'nextQuestion' });
      dispatch({ type: 'correctAnswer' });
    }
    setTextoDigitado('');
    setSubmitDisabled(true);
    typedText.current.value = '';
  }

  const validateTextoDigitado = (answer, textSize) => {
    if((textoDigitado.length === answer.length) && (textoDigitado === answer)) {
      /* Aqui finaliza e libera o submit */
      typedText.current.style.color = '#91e6b1'
      btnSubmit.current.style.background = '#a1ff8a5d' 
      btnSubmit.current.style.color = '#fff';
      setSubmitDisabled(false);
    } else if(textoDigitado === answer.substring(0, textSize)){ 
      /* Aqui verifica se está correto */
      typedText.current.style.color = '#fff';
      btnSubmit.current.style.background = '#283e225d';
      btnSubmit.current.style.color = '#282424';
      setSubmitDisabled(true);
    } else {
      /* Aqui detecta um erro */
      typedText.current.style.color = '#ff7e7e'
      btnSubmit.current.style.background = '#283e225d'
      btnSubmit.current.style.color = '#282424';
      setSubmitDisabled(true);
      dispatch({ type: 'incorrectAnswer' });
    }
  }

  //Retorna a nomenclatura á ser utilizada
  const getNomenclature = () => {
    const questao = questoes[perguntaAtual].question;
    return questao.nomenclature.name; 
  }

  //Cuidando do evento de enter na aplicação
  const handleEnterEvent = (keyEvent) => {
    if(keyEvent.keyCode === 13 && !submitDisabled){
      keyEvent.preventDefault();
      handleSubmitQuestion(keyEvent);
    } else if(keyEvent.keyCode === 13) {
      keyEvent.preventDefault();
    }
  };

  return (
      <form onSubmit={handleSubmitQuestion}>
        <h3>Digite um nome para a variável:</h3>
        <p className="variavel-da-questao">{questoes[perguntaAtual].question.name}</p>
        <h5>Utilizar a nomenclatura <span>{getNomenclature()}</span></h5>
        <textarea
         name="inputVariavel" 
         rows="4" 
         cols="50" 
         onKeyDown={(e) => handleEnterEvent(e)}
         onChange={(e) => setTextoDigitado(e.target.value)} 
         ref={typedText} 
         spellCheck={false}
        />
        <input
         className='btn-submit' 
         type="submit" 
         value="Enviar Resposta" 
         disabled={submitDisabled} 
         ref={btnSubmit}
         />
      </form>
  )
}

export default GameForm;
