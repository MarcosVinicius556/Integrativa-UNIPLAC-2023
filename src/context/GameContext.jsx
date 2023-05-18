import { createContext, useReducer } from 'react';

const initialGameState = {
    name: 'Marcos'
}

const gameReducer = (state, action) => {
    switch(action.type){
        default:
            return { ...state };
    }    
}


export const GameContext = createContext();


//Provendo o nosso contexto para a aplicação
export const GameProvider =  ({children}) => {

    const value = useReducer(gameReducer, initialGameState);
    
    return (
        <GameContext.Provider value={{value}}>
            {children}
        </GameContext.Provider>
    );
}