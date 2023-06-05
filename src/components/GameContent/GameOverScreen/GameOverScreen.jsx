import './game-over-screen.css';
import { Link } from 'react-router-dom';


function GameOverScreen() {
  return (
    <div className="game-over-container">
      <h1>Fim de jogo!</h1>
      {/* <img src={sad} alt="" /> */}
      <div className="img-game-over"></div>
      <h4>Parece que você ainda não é um galo cinza, tente estudar mais um pouco e volte novamente mais tarde!</h4>
      <div className="buttons-container">
        <Link to="/game" className='btn-try-again'>Tentar novamente</Link>
        <Link to="/" className='btn-return'>Voltar para a página home</Link>
      </div>
    </div>
  )
}

export default GameOverScreen;