import CuriositiesCard from './CuriositeCard/CuriositiesCard';
import './game-curiosities.css'

function GameCuriosities({ gameInformation }) {
  return (
    <div className='game-curiosities-container'>
        <h1 className="curiosities-container-title">Curiosidades sobre { gameInformation.nome }</h1>
        <div className="curiosities-box">
          {
            gameInformation.curiosidades.map((curiosidade) => (
              <CuriositiesCard title={curiosidade.titulo} text={curiosidade.texto} key={ curiosidade.titulo + "_" + curiosidade.texto }/>
            ))
          }
        </div>
    </div>
  )
}

export default GameCuriosities;