/* eslint-disable react/prop-types */
import './game-description.css';

function GameDescription({ img, title, text }) {
  return (
    <div className='description-game-page'>
        <div className="description-container">
            <h1 className="description-title">{title}</h1>
            <div className="description-box">
              <img src={img} alt="Imagem do card" />
              <p className="text">{ text }</p>
            </div>
        </div>
    </div>
  )
}

export default GameDescription;