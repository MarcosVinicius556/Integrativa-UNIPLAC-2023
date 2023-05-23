import "./header.css";
import { Link } from 'react-router-dom';

function Header() {
  return (
    <div className="header-top">
      <div className="header-logo">Sintax</div>

      <div className="header-links">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">Sobre nós</Link>
          </li>
          <li>
            <Link to="/contact">Contato</Link>
          </li>
        </ul>
      </div>

      <div className="buttonLogin">
        <button type="button"><Link to="/login">Login/Cadastro</Link> </button>
      </div>
    </div>
  );
}
export default Header;
