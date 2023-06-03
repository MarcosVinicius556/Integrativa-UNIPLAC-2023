import { useContext } from 'react';
import { GameContext } from '../../../../context/GameContext';
import './status-card.css';

function ScoreCard() {

  const { value: gameReducer } = useContext(GameContext);
  const [ state ] = gameReducer;
  const { corrects, incorrects } = state.playerScore;


    return (
        <div className="game-score game-card">
            <div className="hits">
              Acertos:{ corrects }
              </div>
            <div className="mistakes">
              Erros:{ incorrects }
              </div>
        </div>
    );
}

export default ScoreCard;