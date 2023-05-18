import { createContext, useReducer } from 'react';

const initialGameState = {
    playerName: 'Marcos',
    playerLife: '',
    playerScore: '',
    gameQuestion: 1
}

const gameReducer = (state, action) => {
    switch(action.type){
        case 'startGame':
            return{
                ...state, //Devolver aqui também a lista de questões
            };
        case 'nextQuestion':
            console.log('Avançou a questão')
            return{
                ...state, gameQuestion: state.gameQuestion + 1
            };
        case 'timeOver':
            console.log('Fim da partida');
            return {
                ...state
            };
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