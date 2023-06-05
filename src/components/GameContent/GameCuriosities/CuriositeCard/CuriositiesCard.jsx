/* eslint-disable react/prop-types */
import './curiosities-card.css'

function CuriositiesCard({ title, text }) {
  return (
    <div className='curiosities-card-container'>
        <h1 className="curiosities-title">{ title }</h1>
        <p className="curiosities-text">{ text }</p>
    </div>
  )
}

export default CuriositiesCard;