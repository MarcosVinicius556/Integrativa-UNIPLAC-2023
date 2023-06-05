import GameCuriosities from './GameCuriosities/GameCuriosities';
import GameDescription from './GameDescription/GameDescription';
import GameHeader from './GameHeader/GameHeader';
import GameHints from './GameHints/GameHints';
import GameMain from './GameMain/GameMain';
import GameStatus from './GameStatus/GameStatus';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';

import camelInformation from '../../assets/game-information/camel';
import kebabInformation from '../../assets/game-information/kebab';
import pascalInformation from '../../assets/game-information/pascal';
import snakeInformation from '../../assets/game-information/snake';
import randomInformation from '../../assets/game-information/random';

import './game-section.css';
import LoadingPage from '../LoadingPage/LoadingPage';

function GameSection() {

    const { id } = useParams();
    const [loading, setLoading] = useState(true);
    const [ game, setGame ] = useState();

    useEffect(() => {
        setLoading(true);
        switch (id) {
            case '1':
                setTimeout(() => {
                    setGame(camelInformation);
                    setLoading(false);
                }, 2000);
                break;
            case '2':
                setTimeout(() => {
                    setGame(kebabInformation);
                    setLoading(false);
                }, 2000);
                break;
            case '3':
                setTimeout(() => {
                    setGame(pascalInformation);
                    setLoading(false);
                }, 2000);
                break;
            case '4':
                setTimeout(() => {
                    setGame(snakeInformation);
                    setLoading(false);
                }, 2000);
                break;
            case '5':
                setTimeout(() => {
                    setGame(randomInformation);
                    setLoading(false);
                }, 2000);
                break;
            default:
                setLoading(false);
        }
    }, [id]);

    if (loading) {
        return <LoadingPage />;
    }

    return (
        
        <div className="game-page">
            <GameDescription img={game.img} title={game.nome} text={game.textoSobre}/>
            <GameHints gameInformation={game}/>
            <div className="game-container">
                <GameHeader />
                <GameMain />
                <GameStatus />
            </div>
            <GameCuriosities gameInformation={game}/>
        </div>
    );
}

export default GameSection;