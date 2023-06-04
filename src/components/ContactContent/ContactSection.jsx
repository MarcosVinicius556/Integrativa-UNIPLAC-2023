import ContactForm from './ContactForm/ContactForm';
import './contact-section.css';

function ContactSection(){
    return(
        <section className="contact-us">
        <div className="form-container">
            <h1 className="contact-title">
                Entre em contato!
            </h1>
            <ContactForm />
        </div>
    </section>
    );
}

export default ContactSection;