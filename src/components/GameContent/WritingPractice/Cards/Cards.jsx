import "./cards.css";

function Cards({name, img, type, linguage}) {

    return (
      <div className='cards'>

          <div className="card-type">
          <img src={img} alt="" />
          <p ><b>{name}</b></p>
          </div>

          <p className="textUsualy">Forma de Uso</p>
          <p className="textType">{type}</p>
          <p className="textUsualy">Muito usado em</p>
          <p className="textType">{linguage}</p>

        </div>

      );
}

export default Cards;