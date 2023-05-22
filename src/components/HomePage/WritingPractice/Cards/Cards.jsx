import "./cards.css";

// eslint-disable-next-line react/prop-types
function Cards({name, img, type, linguage, textOne, textTwo, className}) {

  
    return (
      <div className='cards'>
        <div className={className} >

        <div className="card-type">
          <img src={img} alt="" />
          <p className="textType"><b>{name}</b></p>
          </div>

          <p className="textUsualy">{textOne}</p>
          <p className="textType">{type}</p>
          <p className="textUsualy">{textTwo}</p>
          <p className="textType">{linguage}</p>

        </div>

        </div>


      );
}

export default Cards;