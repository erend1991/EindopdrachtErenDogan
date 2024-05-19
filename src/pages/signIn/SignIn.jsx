import {useContext, useState} from "react";
import {AuthContext} from "../../AuthContext/AuthContext.jsx";
import Button from "../../components/button/Button.jsx";
import "./SignIn.css"
import axios from "axios";
import Header from "../../components/header/Header.jsx";
import {useNavigate} from "react-router-dom";
import InputField from "../../components/InputField/InputField.jsx";
import food3 from "../../assets/food3.jpg"
import ErrorMessage from "../../components/errorMessage/ErrorMessage.jsx";


function SignIn() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('')
    const [error, toggleError] = useState(false)
    const {login} = useContext(AuthContext);
    const navigate = useNavigate()


    async function handleSubmit(e) {
        e.preventDefault();
        toggleError(false)


        try {
            const result = await axios.post('https://frontend-educational-backend.herokuapp.com/api/auth/signin', {
                username: username,
                password: password,
            })
            console.log(result.data)
            login(result.data.accessToken)
            navigate('/')

        } catch (e) {
            console.error(e)
            toggleError(true)
        }
    }


    return (
        <>
            <Header img={food3} alt={food3} subtitle="Inloggen"/>
            <form onSubmit={handleSubmit}>
                <label htmlFor="username-field">
                    username:
                    <InputField
                        type="text"
                        id="username-field"
                        name="username"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                    />
                </label>

                <label htmlFor="password-field">
                    Wachtwoord:
                    <InputField
                        type="password"
                        id="password-field"
                        name="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </label>
                {error && <ErrorMessage message="combinatie van wachtwoord en username is onjuist" />}
                <Button type="submit" variant="primary">
                    Submit
                </Button>
            </form>
        </>

    )


}

export default SignIn;