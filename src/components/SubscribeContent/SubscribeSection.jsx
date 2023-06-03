import LoginCard from './LoginCard/LoginCard';
import SubscribeCard from './SubscribeCard/SubscribeCard';
import './subscribe-section.css';

function SubscribeSection(){
    return(
        <section className="subscribe-container">
            <h1 className="login-title">Olá, Bem Vindo!</h1>
            <LoginCard />
            <SubscribeCard />
        </section>
    );
}

export default SubscribeSection;