import './status-card.css';
import { useContext, useEffect, useState } from 'react';
import { GameContext } from '../../../../context/GameContext';

function MessageCard() {

    const { value: GameReducer } = useContext(GameContext);
    const [ state ] = GameReducer;
    const [ helpMessage, setHelpMessage ] = useState('');
    
    
    useEffect(() => {
        let message = state.questoes[state.gameQuestion].question.help;
        setHelpMessage(message);
    }, [state.gameQuestion]);

    return (
        <div className="game-message game-card">
            <h4>{ helpMessage }</h4>
        </div>
    );
}

export default MessageCard;