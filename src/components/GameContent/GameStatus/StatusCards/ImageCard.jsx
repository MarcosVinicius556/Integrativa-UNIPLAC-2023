import './status-card.css';
import GattinoFeliz from '../../../../assets/gattino-feliz.png';

function ImageCard() {
    return (
        <div className="game-image-status game-card">
            <img 
             src={GattinoFeliz}
             alt="Rosto feliz" 
             id="img-status" />
        </div>
    );
}

export default ImageCard;