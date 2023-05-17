import GameHeader from './GameHeader/GameHeader';
import GameMain from './GameMain/GameMain';
import GameStatus from './GameStatus/GameStatus';
import './game-section.css';

function GameSection() {
    return (
        <div className="game-container">
            <GameHeader />
            <GameMain />
            <GameStatus />
        </div>
    );
}

export default GameSection;