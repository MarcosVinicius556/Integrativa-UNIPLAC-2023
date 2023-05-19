import "./header.css";

function Header() {
  return (
    <div className="header-top">
      <div className="header-logo">Sintax</div>

      <div className="header-links">
        <ul>
          <li>
            <a href="">Home</a>
          </li>
          <li>
            <a href="">Sobre Nós</a>
          </li>
          <li>
            <a href="">Contato</a>
          </li>
        </ul>
      </div>

      <div className="buttonLogin">
        <button type="button"><a href="">Login/Cadastro</a> </button>
      </div>
    </div>
  );
}
export default Header;
