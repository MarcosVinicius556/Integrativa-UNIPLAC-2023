import HintCard from './HintCard/HintCard';
import './game-hints.css'

function GameHints() {
  return (
    <div className='game-hints-container'>
        <h1 className="hints-container-title">Exemplos</h1>
        <div className="hints-box">
            <HintCard title="teste" text="texto de teste" />
            <HintCard title="teste" text="texto de teste" />
            <HintCard title="teste" text="texto de teste" />
        </div>
    </div>
  )
}

export default GameHints;