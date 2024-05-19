import { useState } from 'react';
import './Contact.css';
import Button from '../../components/button/Button.jsx';
import Header from '../../components/header/Header.jsx';
import InputField from "../../components/InputField/InputField.jsx";
import food2 from "../../assets/food2.jpg"
import TextArea from "../../components/textArea/TextArea.jsx";
import ErrorMessage from "../../components/errorMessage/ErrorMessage.jsx";

function ContactForm() {
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [success, setSuccess] = useState(false);
    const [error, setError] = useState('');

    function handleSubmit(e) {
        e.preventDefault();
        try {
            if (!email || !message) {
                throw new Error('E-mail en bericht zijn verplicht.');
            }

            if (message.length < 10 || message.length > 500) {
                throw new Error('Het bericht moet tussen 10 en 500 tekens lang zijn.');
            }

            setSuccess(true);
            console.log('Email:', email);
            console.log('Message:', message);
            console.log('Bericht verstuurd');
        } catch (err) {
            console.error(err);
            setError(err.message);
        } finally {
            setEmail('');
            setMessage('');
        }
    }

    return (
        <>
            <Header img={food2} alt={food2} subtitle="Contactpagina"/>
            <div className="form-outer-content-container">
                {success && <p className="success-message">Bedankt voor uw bericht!</p>}
                {!success && (
                    <form className="form-container" onSubmit={handleSubmit}>
                        <label htmlFor="email">Email:</label>
                        <InputField
                            type="email"
                            id="email"
                            value={email}
                            name="email"
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />

                        <label htmlFor="message">Bericht:</label>
                        <TextArea
                            label="Bericht"
                            name="message"
                            value={message}
                            onChange={(e) => setMessage(e.target.value)}
                            placeholder="Voer uw bericht in..."
                            rows="5"
                            cols="50"
                            minLength="10"
                            maxLength="500"
                            required
                        />
                        <Button type="submit" variant="primary">
                            Verstuur uw bericht
                        </Button>

                        {error && <ErrorMessage message={error} />}
                    </form>
                )}
            </div>
        </>
    );
}

export default ContactForm;
