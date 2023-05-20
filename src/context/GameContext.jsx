import { createContext, useReducer } from 'react';
import questoes from '../assets/questions';


const initialGameState = {
    playerName: 'Marcos',
    playerLife: 100,
    playerScore: '',
    gameQuestion: 0,
    questoes,
}

const gameReducer = (state, action) => {
    switch(action.type){
        case 'startGame':
            return{
                //Sempre que iniciar o game reordena todas as questões
                ...state, questoes: questoes.sort( () => { return Math.random() - 0.5 })
            };
        case 'nextQuestion':
            console.log('Avançou a questão')
            return{
                ...state, gameQuestion: state.gameQuestion + 1
            };
        case 'timeOver':
            console.log('Fim da part ida');
            //Discutir e implementar a lógica aqui
            return {
                ...state
            };
        case 'decrementLife':
            return {
                ...state, playerLife: state.playerLife - 10,
            }
    }    
}


export const GameContext = createContext();


//Provendo o nosso contexto para a aplicação
// eslint-disable-next-line react/prop-types
export const GameProvider =  ({children}) => {

    const value = useReducer(gameReducer, initialGameState);
    
    return (
        <GameContext.Provider value={{value}}>
            {children}
        </GameContext.Provider>
    );
}