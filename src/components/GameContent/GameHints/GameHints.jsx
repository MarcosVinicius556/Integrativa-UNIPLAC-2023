import HintCard from './HintCard/HintCard';
import './game-hints.css'

function GameHints({ gameInformation }) {


  return (
    <div className='game-hints-container'>
        <h1 className="hints-container-title">Exemplos de { gameInformation.nome }</h1>
        <div className="hints-box">
          {
            gameInformation.exemplos.map((exemplo) => (
              <HintCard title={exemplo.titulo} text={exemplo.texto} key={ exemplo.titulo + "_" + exemplo.texto }/> 
            ))
          }
        </div>
    </div>
  )
}

export default GameHints;