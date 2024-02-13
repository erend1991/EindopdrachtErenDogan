import { useState } from 'react';
import axios from 'axios';
import './Contact.css';
import Button from '../../button/Button.jsx';
import Header from '../../components/header/Header.jsx';

function ContactForm() {
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [success, setSuccess] = useState(false);
    const [error, setError] = useState('');

    async function handleSubmit(e) {
        e.preventDefault(); // Prevent the default form submission behavior

        try {
            const response = await axios.post('/api/contact', { email, message });

            if (response.status === 200) {
                setSuccess(true);
            } else {
                setError('false');
            }
        } catch (err) {
            setError('true');
        }
    }

    return (
        <>
            <h2>Contactpagina</h2>
            <Header />
            <div className="outer-content-container">
                {success && <p className="success-message">Bedankt voor uw bericht!</p>}
                {!success && (
                    <form className="form-container" onSubmit={handleSubmit}>
                        <label htmlFor="email">Email:</label>
                        <input
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
                            Submit
                        </Button>

                        {error && <p style={{ color: 'red' }}>{error}</p>}
                    </form>
                )}
            </div>
        </>
    );
}

export default ContactForm;

