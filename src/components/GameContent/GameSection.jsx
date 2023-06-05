import GameCuriosities from './GameCuriosities/GameCuriosities';
import GameDescription from './GameDescription/GameDescription';
import GameHeader from './GameHeader/GameHeader';
import GameHints from './GameHints/GameHints';
import GameMain from './GameMain/GameMain';
import GameStatus from './GameStatus/GameStatus';
import './game-section.css';

function GameSection() {
    return (
        <div className="game-page">
            <GameDescription img="img" title="Pascal Case" text="texto"/>
            <GameHints />
            <div className="game-container">
                <GameHeader />
                <GameMain />
                <GameStatus />
            </div>
            <GameCuriosities />
        </div>
    );
}

export default GameSection;