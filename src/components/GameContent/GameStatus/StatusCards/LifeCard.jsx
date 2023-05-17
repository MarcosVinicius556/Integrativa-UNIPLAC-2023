import './status-card.css';

function LifeCard() {
    return (
        <div className="game-lifebar game-card">
            <h4>Saúde:</h4>
            <div className="health-bar">
                <div className="health-fill"></div>
            </div>
          </div>
    );
}

export default LifeCard;