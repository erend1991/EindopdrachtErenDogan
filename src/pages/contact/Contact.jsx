import { useState } from 'react';
import './Contact.css';
import Button from '../../components/button/Button.jsx';
import Header from '../../components/header/Header.jsx';
import InputField from "../../components/InputField/InputField.jsx";
import food2 from "../../assets/food2.jpg"

function ContactForm() {
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [success, setSuccess] = useState(false);
    const [error, setError] = useState('');

    function handleSubmit(e) {
        e.preventDefault();

        try {
            setSuccess(true);
            console.log('Email:', email);
            console.log('Message:', message);
            console.log('Form submitted successfully');
        } catch (err) {
            console.error(err);
            setError('An error occurred while submitting the form.');
        } finally {
            setEmail('');
            setMessage('');
        }
    }

    return (
        <>
            <Header img={food2} alt={food2}/>
            <h2>Contactpagina</h2>
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

                        <label htmlFor="message">Message:</label>
                        <textarea
                            id="message"
                            value={message}
                            name="message"
                            onChange={(e) => setMessage(e.target.value)}
                            required
                        ></textarea>

                        <Button type="submit" variant="primary">
                            verstuur uw bericht
                        </Button>

                        {error && <p>{error}</p>}
                    </form>
                )}
            </div>
        </>
    );
}

export default ContactForm;
