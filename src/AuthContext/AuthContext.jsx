import {createContext, useEffect, useState} from 'react';
import {useNavigate} from 'react-router-dom';
import {jwtDecode} from "jwt-decode";
import axios from "axios";

export const AuthContext = createContext({});

function AuthContextProvider({children}) {
    const [isAuth, toggleIsAuth] = useState({
        isAuth: false,
        role: null,
        status: 'pending'
    });
    const navigate = useNavigate();

    useEffect(() => {
        const token = localStorage.getItem('token')
        if (token) {
            const decoded = jwtDecode(token)
            fetchUserData(decoded.sub, token)
            toggleIsAuth({
                isAuth: true,
                user: {
                    username: '',
                    email: '',
                    id: '',
                    role: ['user']
                },
                status: 'done',
            })
        } else {
            toggleIsAuth({
                isAuth: false,
                role: null,
                status: 'done'
            })
        }
    }, [])

    function login(JWT) {
        console.log('Gebruiker is ingelogd!');
        localStorage.setItem('token', JWT)
        const decoded = jwtDecode(JWT)
        fetchUserData(decoded.sub, JWT, '/')
    }


    function logout() {
        console.log('Gebruiker is uitgelogd!');
        localStorage.clear()
        toggleIsAuth({
            isAuth: false,
            role: null,
            status: 'done'
        });
        navigate('/');
    }

    async function fetchUserData(id, token) {
        try {
            const result = await axios.get(`https://frontend-educational-backend.herokuapp.com/api/auth/signin/${id}`, {
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${token}`,
                }
            })
            toggleIsAuth({
                ...isAuth,
                isAuth: true,
                user: {
                    id: result.data.id,
                    username: result.data.username,
                    email: result.data.email,
                },
                status: 'done'
            })

        } catch (e) {
            console.error(e)

        }
    }

    const contextData = {
        isAuth: isAuth,
        login: login,
        logout: logout,
    };

    return (
        <AuthContext.Provider value={contextData}>
            {toggleIsAuth.status ==='pending'
                ?<p>Loading...</p>
                : children}
        </AuthContext.Provider>
    );
}

export default AuthContextProvider;