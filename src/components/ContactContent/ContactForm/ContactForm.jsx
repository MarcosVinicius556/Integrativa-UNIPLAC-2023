import './contact-form.css';

function ContactForm(){
    return(
            <form>
                <div className="form-box">
                    <label for="name">Nome</label>
                    <input type="text" name="name" id="inputName" className="form-input" />
                </div>
                <div className="form-box">
                    <label for="email">Email</label>
                    <input type="email" name="email" id="inputEmail" className="form-input"/>
                </div>
                <div className="form-box">
                    <label for="message">Mensagem</label>
                    <textarea name="message" id="inputMessage" className="form-input" cols="30" rows="10">

                    </textarea>
                </div>
                <input type="submit" value="Enviar" id="inputSubmit"/>
            </form>
    );
}

export default ContactForm;