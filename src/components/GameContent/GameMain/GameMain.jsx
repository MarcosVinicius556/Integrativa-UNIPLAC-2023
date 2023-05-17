import GameForm from './GameForm/GameForm';
import './game-main.css';

function GameMain() {
    
    return (
        <div className="game-main">
            <div className="game-display">
                <GameForm />
            </div>
        </div>
    );
}

export default GameMain;