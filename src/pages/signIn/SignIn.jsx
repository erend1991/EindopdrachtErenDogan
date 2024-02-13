import {useContext, useState} from "react";
import {AuthContext} from "../../AuthContext/AuthContext.jsx";
import Button from "../../button/Button.jsx";
import "./SignIn.css"
import axios from "axios";


function SignIn() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('')
    const [error, toggleError] = useState(false)
    const {login} = useContext(AuthContext);


    async function handleSubmit(e) {
        e.preventDefault();
        toggleError(false)


        try {
            const result = await axios.post('http://localhost:3000/login',{
                email: email,
                password: password,
        })
            console.log(result.data)
            login(result.data.accesToken)

        } catch (e) {
            console.error(e)
            toggleError(true)
        }
    }


        return (
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
                {error && <p>combinatie van emailadres en wachtwoord is onjuist!</p>}
                <Button type="submit" variant="primary">
                    Submit
                </Button>
            </form>

        )


}
export default SignIn;