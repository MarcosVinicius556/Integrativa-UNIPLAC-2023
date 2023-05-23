import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import "./cards.css";

// eslint-disable-next-line react/prop-types
function Cards({color, name, img, type, obsOne, obsTwo, obsThree, className}) {

  const cardModel = useRef();
  
  useEffect(() => {
    console.log(color);
    cardModel.current.style.background = color;
  }, []);

    return (
      <div className='cards' ref={cardModel}>
        <div className={className} >
          <div className="card-type">
            <img src={img} alt="" />
            <p className="textType"><b>{name}</b></p>
            </div>
            <p className="obs-title">{className}</p>
            <ul className="list-obs">
              <li className="textUsualy">{obsOne}</li>
              <li className="textUsualy">{obsTwo}</li>
              <li className="textUsualy">{obsThree}</li>
            </ul>
          </div>
          <Link to="/game"><a className='btn-play'>Jogar</a></Link>
        </div>
      );
}

export default Cards;