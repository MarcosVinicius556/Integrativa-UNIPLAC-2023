import CuriositiesCard from './CuriositeCard/CuriositiesCard';
import './game-curiosities.css'

function GameCuriosities() {
  return (
    <div className='game-curiosities-container'>
        <h1 className="curiosities-container-title">Curiosidades</h1>
        <div className="curiosities-box">
          <CuriositiesCard title="teste" text="texto de teste" />
          <CuriositiesCard title="teste" text="texto de teste" />
        </div>
    </div>
  )
}

export default GameCuriosities;