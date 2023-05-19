import { useContext, useState, useEffect } from 'react';
import { GameContext } from '../../../../context/GameContext';
import './status-card.css';


function TimerCard() {

    const {value: gameReducer} = useContext(GameContext);
    const [state, dispatch] = gameReducer;
    
    const [timer, setTimer] = useState(30);

    useEffect(() => {
      const interval = setInterval(() => {
        setTimer((prevTimer) => prevTimer - 1);
      }, 1000);
  
      return () => clearInterval(interval);
    }, []);

    useEffect(() => {
        if(timer === 0){
            dispatch({ type: 'timeOver' });
            setTimer(30);
        }
    }, [dispatch, timer]);

    //Reseta o timer
    useEffect(() => {
        
    }, [state.gameQuestion]);
    return (
        <div className="game-timer game-card">
            <h1 id="timer">{timer}</h1>
        </div>
    );
}

export default TimerCard;