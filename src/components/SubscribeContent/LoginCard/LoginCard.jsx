import './login-card.css';

function LoginCard() {
    return (
        <div className="card">
            <h1 className="card-title">Entrar</h1>
            <form className="form-login">
                <div className="card-box-column">
                    <input type="text" name="name" id="inputLogin" className='input-card' required placeholder='Nome de usário ou email'/>
                    <input type="password" name="pass" id="inputSenha" className='input-card' required placeholder='Senha'/>
                </div>
                <div className="card-box-row">
                    <div className="lembrar-container">
                        <input type="checkbox" name="Lembrar" id="inputLembrar"/>
                        <label htmlFor="Lembrar">Lembrar-me</label>
                    </div>
                    <a href="" className='esqueceu-senha'>Perdeu sua senha?</a>
                </div>

                <input type="submit" value="Entrar" className='inputSubmit'/>
            </form>
        </div>
    );
}

export default LoginCard;