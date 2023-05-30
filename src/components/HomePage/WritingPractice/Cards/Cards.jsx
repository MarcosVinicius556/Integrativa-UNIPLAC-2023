import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import "./cards.css";

// eslint-disable-next-line react/prop-types
function Cards({color, name, img, titleOne, obsOne, titleTwo, obsTwo,  className}) {

  const cardModel = useRef();
  
  useEffect(() => {
    console.log(color);
    cardModel.current.style.background = color;
  }, []);

    return (
      <div className='cards' ref={cardModel}>
          <div className="card-type">
            <img src={img} alt="" />
            <p className="textType"><b>{name}</b></p>
            </div>
            <ul className="list-obs">
              {console.log(titleOne)}
              <li className="text-title">{titleOne}</li>
              <li className="text-obs">{obsOne}</li>
              <li className="text-title">{titleTwo}</li>
              <li className="text-obs">{obsTwo}</li>
            </ul>
          <Link to="/game" className='btn-play'>Jogar</Link>
        </div>
      );
}

export default Cards;