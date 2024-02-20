import {Link, useNavigate} from 'react-router-dom';
import {useState} from "react";
import axios from "axios";
import Button from "../../button/Button.jsx";
import './SignUp.css'
import Header from "../../components/header/Header.jsx";

function SignUp() {

    const [email, setEmail] = useState('')
    const [userName, setUserName] = useState('')
    const [password, setPassword] = useState('')

    const [error, toggleError] = useState(false);
    const [loading, toggleLoading] = useState(false);
    const navigate = useNavigate()

    async function handleSubmit(e) {
        e.preventDefault();
        toggleError(false);
        toggleLoading(true);

        try {
            await axios.post("https://frontend-educational-backend.herokuapp.com/api/auth/signup",
                {
                    username: userName,
                    email: email,
                    password: password,
                    role: ["user"],
                },
                {
                    headers: {
                        "Content-Type": "application/json",
                        "Authorization": "Bearer xxx.yyy.zzz",
                    },
                }
            );
            console.log(email, userName)
            navigate('/favorites');
        } catch (e) {
            console.error(e);
            toggleError(true);
        }

        toggleLoading(false);
    }
        return (
        <>
            <Header/>
            <h1>Registreren</h1>
            <form onSubmit={handleSubmit}>
                <label htmlFor="email-field">
                    Emailadres:
                    <input
                        type="email"
                        id="email-field"
                        name="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </label>
                <label htmlFor="username-field">
                    Gebruikersnaam:
                    <input
                        type="text"
                        id="username-field"
                        value={userName}
                        onChange={(e) => setUserName(e.target.value)}
                    />
                </label>

                <label htmlFor="password-field">
                    Wachtwoord:
                    <input
                        type="password"
                        id="password-field"
                        name="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </label>
                {error && <p className="error">Dit account bestaat al. Probeer een ander emailadres.</p>}
                <Button variant="primary"
                    type="submit"
                    className="form-button"
                    disabled={loading}
                >
                    Registreren
                </Button>

            </form>

            <p>Heb je al een account? Je kunt je <Link to="/signin">hier</Link> inloggen.</p>
        </>
    );
}

export default SignUp;