import { useState, useEffect, useRef } from 'react';
import questoes from '../../../../assets/questions';
import nomenclaturas from '../../../../assets/nomeclatures';
import './game-form.css'

function GameForm() {
  
  const [textoDigitado, setTextoDigitado] = useState('');
  const [errosDeDigitacao, setErrosDeDigitacao] = useState(0);
  const [perguntaAtual, setPerguntaAtual] = useState(0);
  const [submitDisabled, setSubmitDisabled] = useState(true);
  const typedText = useRef('');

  const getNomenclature = () => {
    const questao = questoes[perguntaAtual].question;
    return nomenclaturas[questao.nomenclature].name; 
  }
  
  const handleSubmitQuestion = (e) => {
    e.preventDefault();
    let proximaQuestao = perguntaAtual + 1;
    if(proximaQuestao >= questoes.length){
      setPerguntaAtual(0);
      alert("Parabéns, você respondeu todas as questões!")
    } else {
      setPerguntaAtual(proximaQuestao);
    }
    setTextoDigitado('');
    setErrosDeDigitacao(0);
    setSubmitDisabled(true);
    typedText.current.value = '';
  }

  useEffect(() => {
    const questao = questoes[perguntaAtual].question;
    let textSize = textoDigitado.length;

    validateTextoDigitado(questao.answer, textSize);
  }, [textoDigitado]);

  const validateTextoDigitado = (answer, textSize) => {
    if((textoDigitado.length === answer.length) && (textoDigitado === answer)) {
      /* Aqui finaliza e libera o submit */
      typedText.current.style.color = '#91e6b1'
      setSubmitDisabled(false);
    } else if(textoDigitado === answer.substring(0, textSize)){ 
      /* Aqui verifica se está correto */
      typedText.current.style.color = '#fff'
      setSubmitDisabled(true);
    } else {
      /* Aqui detecta um erro */
      typedText.current.style.color = '#ff7e7e'
      setErrosDeDigitacao(errosDeDigitacao + 1);
      setSubmitDisabled(true);
    }
  }

  const handleEnterEvent = (keyEvent) => {
    if(keyEvent.keyCode === 13 && !submitDisabled){
      keyEvent.preventDefault();
      handleSubmitQuestion(keyEvent);
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
        <input className='btn-submit' type="submit" value="Enviar Resposta" disabled={submitDisabled} />
      </form>
  )
}

export default GameForm;
