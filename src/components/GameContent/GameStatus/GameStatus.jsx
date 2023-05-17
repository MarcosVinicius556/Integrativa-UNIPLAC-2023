import ImageCard from './StatusCards/ImageCard';
import LifeCard from './StatusCards/LifeCard';
import MessageCard from './StatusCards/MessageCard';
import TimerCard from './StatusCards/TimerCard';
import ScoreCard from './StatusCards/ScoreCard';
import './game-status.css';

function GameStatus() {
    return(
        <div className="game-status">
            <TimerCard />
            <LifeCard />
            <ImageCard />
            <MessageCard />
            <ScoreCard />
        </div>
    );
}

export default GameStatus;