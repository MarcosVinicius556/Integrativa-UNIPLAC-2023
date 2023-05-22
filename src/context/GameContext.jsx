import { createContext, useReducer } from 'react';
import questoes from '../assets/questions';


const initialGameState = {
    playerName: 'Marcos',
    playerLife: 100,
    playerScore: {
        corrects: 0,
        incorrects: 0,
    },
    gameQuestion: 0,
    questoes,
}

const gameReducer = (state, action) => {
    switch(action.type){
        case 'startGame':
            return{
                //Sempre que iniciar o game reordena todas as questões
                ...state,
                 questoes: questoes.sort( () => { return Math.random() - 0.5 })
            };
        case 'nextQuestion':
            return{
                ...state,
                gameQuestion: state.gameQuestion + 1
            };
        case 'correctAnswer':
            return {
                ...state, 
                playerScore: {
                    corrects: state.playerScore.corrects + 1,
                    incorrects: state.playerScore.incorrects,
                }
            }
        case 'incorrectAnswer':
            return {
                ...state, 
                playerScore: {
                    corrects: state.playerScore.corrects,
                    incorrects: state.playerScore.incorrects + 1,
                },
                playerLife: state.playerLife - 5,
            }
        case 'timeOver':
            alert('Tempo esgotado!');
            //Discutir e implementar a lógica aqui
            return {
                ...state
            };
        case 'gameOver':
            alert('Fim da partida');
            return {
                ...state
            };
        case 'victory':
            alert('Parabéns você finalizou o jogo');
            return{
                ...state,
            }
        default: 
            console.log(`${action.type} não está mapeado!`);
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