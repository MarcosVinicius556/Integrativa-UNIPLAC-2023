import { useContext, useEffect, useRef } from 'react';
import { GameContext } from '../../../../context/GameContext';
import './status-card.css';


function LifeCard() {

    const lifeBar = useRef();
    const { value: gameReducer } = useContext(GameContext);
    const [ state ] = gameReducer; //Aqui não é necessário o disptach (Ao menos ainda...)
    const { playerLife } = state;
    
    useEffect(() => { 
        lifeBar.current.style.width = `${playerLife}%`;
        
        if( playerLife > 75 ) { //Bom
            lifeBar.current.style.background = 'green';
        } else if( playerLife > 50 && playerLife < 75 ) { //Mediano
            lifeBar.current.style.background = 'yellow';
        } else if( playerLife > 25 && playerLife < 50 ) { // Mal
            lifeBar.current.style.background = 'red';
        } else if( playerLife < 25 ){ //Muito mal
            lifeBar.current.style.background = 'black';
        }

    }, [playerLife]);

    return (
        <div className="game-lifebar game-card">
            <h4>Saúde:</h4>
            <div className="health-bar">
                <div className="health-fill" ref={lifeBar}></div>
            </div>
          </div>
    );
}

export default LifeCard;