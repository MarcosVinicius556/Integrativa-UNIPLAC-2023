/* eslint-disable react/prop-types */
import './hint-card.css'

function HintCard({ title, text }) {
  return (
    <div className='hint-card-container'>
        <h1 className="hint-title">{ title }</h1>
        <p className="hint-text">{ text }</p>
    </div>
  )
}

export default HintCard