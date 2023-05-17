import './status-card.css';

function ScoreCard() {
    return (
        <div className="game-score game-card">
            <div className="hits">
              Acertos: 6
            </div>
            <div className="mistakes">
              <p>Erros: 4</p>
            </div>
        </div>
    );
}

export default ScoreCard;