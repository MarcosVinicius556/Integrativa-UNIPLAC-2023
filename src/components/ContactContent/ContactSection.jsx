import ContactForm from './ContactForm/ContactForm';
import './contact-section.css';

function ContactSection(){
    return(
        <section className="contact-us">
        <div className="form-container">
            <h1 className="contact-title">
                Ficou interessado em nosso trabalho?
            </h1>
            <p className="contact-text">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illum incidunt cumque ipsum? Nesciunt amet ad eum similique eius assumenda autem iste saepe obcaecati. Voluptates fuga doloremque veniam rerum quaerat velit.
            </p>
            <ContactForm />
        </div>
    </section>
    );
}

export default ContactSection;