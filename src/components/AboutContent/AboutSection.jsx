import './about-section.css';

function AboutSection(){
    return(
    <section className="about-us">
        <h1 className="about-tile">Sobre nós</h1>
        <div className="about-text">
            <p> Nossa equipe é formada por: </p>
            <ul>
                <li>Anderson Vinicius Medeiros - 1º fase</li>
                <li>Juan Thiago Machado - 3° fase</li>
                <li>Katia Reder de Andrade - 3° fase</li>
                <li>Lucas de Jesus Silva - 5º fase</li>
                <li>Marcos Vinicius Angeli Costa - 2° fase</li>
                <li>Nicholas Plauda Candido - 1º fase</li>
                <li>Vitor Gonçalves Vogel - 3° fase</li>
            </ul>
        </div>
        <div className="about-img"></div>
    </section>
    );
}

export default AboutSection;