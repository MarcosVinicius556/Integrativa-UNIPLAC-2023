import { useState, useEffect, useRef } from 'react';
import questoes from './assets/questions';
import nomenclaturas from './assets/nomeclatures';
import './App.css'

function App() {
  
  const getNomenclature = () => {
    const questao = questoes[perguntaAtual].question;
    return nomenclaturas[questao.nomenclature].name; 
  }
  
  const handleSubmitQuestion = (e) => {
    e.preventDefault();
    let proximaQuestao = perguntaAtual + 1;
    console.log(proximaQuestao);
    console.log(questoes.length);
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
  const [textoDigitado, setTextoDigitado] = useState('');
  const [errosDeDigitacao, setErrosDeDigitacao] = useState(0);
  const [perguntaAtual, setPerguntaAtual] = useState(0);
  const [submitDisabled, setSubmitDisabled] = useState(true);
  const typedText = useRef('');

  useEffect(() => {
    const questao = questoes[perguntaAtual].question;
    let textSize = textoDigitado.length;

    validateTextoDigitado(questao.answer, textSize);
  }, [textoDigitado]);

  const validateTextoDigitado = (answer, textSize) => {
    if((textoDigitado.length === answer.length) && (textoDigitado === answer)) {
      //Aqui finaliza e libera o submit
      setSubmitDisabled(false);
    } else if(textoDigitado === answer.substring(0, textSize)){ 
      //Aqui verifica se está correto
      typedText.current.style.color = 'green'
      setSubmitDisabled(true);
    } else {
      //Aqui detecta um erro
      typedText.current.style.color = 'red'
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
    <div className='form-container'>

      <form onSubmit={handleSubmitQuestion}>
        <h3>Digite a variável {questoes[perguntaAtual].question.name}</h3>
        <h5>Utilizar a nomenclatura {getNomenclature()}</h5>
        <h5>Você errou: {errosDeDigitacao}</h5>
        <textarea id="w3review" name="w3review" rows="4" cols="50" onKeyDown={(e) => handleEnterEvent(e)} onChange={(e) => setTextoDigitado(e.target.value)} ref={typedText} spellCheck={false}/>
        <input type="submit" value="Enviar Resposta" disabled={submitDisabled} />
      </form>
    </div>
  )
}

export default App
