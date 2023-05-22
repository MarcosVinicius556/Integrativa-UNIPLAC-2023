import './status-card.css';
import { useContext } from 'react';
import { GameContext } from '../../../../context/GameContext';
import GattinoFeliz from '../../../../assets/gattino-feliz.png';
import GattinoQuaseFeliz from '../../../../assets/gattino-quase-feliz.png';
import GattinoSuspeito from '../../../../assets/gattino-suspeito.png';
import GattinoDesanimado from '../../../../assets/gattino-desanimado.png';
import GattinoMediano from '../../../../assets/gattino-mediano.png';
import GattinoSurtado from '../../../../assets/gattino-surtado.png';

function ImageCard() {

    const{ value: gameReducer } = useContext(GameContext);
    const[ state ] = gameReducer;
    const{ playerLife } = state;

    const handleImage = () => {
        if( playerLife >= 85 ) {
            return GattinoFeliz;
        } else if( playerLife >= 65 && playerLife <= 85 ) {
            return GattinoQuaseFeliz;
        } else if( playerLife >= 45 && playerLife <= 65 ) {
            return GattinoSuspeito;
        } else if( playerLife >= 35 && playerLife <= 45 ) {
            return GattinoDesanimado;
        } else if( playerLife >= 25 && playerLife <= 35 ){
            return GattinoMediano;
        } else if( playerLife <= 25 ){
            return GattinoSurtado;
        }
    }

    return (
        <div className="game-image-status game-card">
            <img 
             src={handleImage()}
             alt="Rosto feliz" 
             id="img-status" />
        </div>
    );
}

export default ImageCard;