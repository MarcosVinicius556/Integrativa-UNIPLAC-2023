import ImageCard from './StatusCards/ImageCard';
import LifeCard from './StatusCards/LifeCard';
import MessageCard from './StatusCards/MessageCard';
import TimerCard from './StatusCards/TimerCard';
import ScoreCard from './StatusCards/ScoreCard';
import { useParams } from 'react-router-dom';
import './game-status.css';

function GameStatus() {

    const{ id } = useParams();

    return(
        <div className="game-status">
            <TimerCard gameId={ id }/>
            <LifeCard gameId={ id }/>
            <ImageCard />
            <MessageCard />
            <ScoreCard />
        </div>
    );
}

export default GameStatus;