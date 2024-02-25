import './NavBar.css'
import {NavLink,} from 'react-router-dom';
import {AuthContext} from "../../AuthContext/AuthContext.jsx";
import {useContext} from "react";


function NavBar() {
    const {isAuth, logout} = useContext(AuthContext)

    return (
        <nav className="main-navigation outer-content-container">
            <div className="inner-nav-container">
                <h2 className="push"> WatEtenWeVandaag</h2>
                <ul className="main-navigation-links">
                    <li><NavLink className={({isActive}) => isActive ? 'active-menu-link' : 'default-menu-link'}
                                 to="/">Home</NavLink></li>
                    <li><NavLink className={({isActive}) => isActive ? 'active-menu-link' : 'default-menu-link'}
                                 to="/favorites">Favorieten</NavLink></li>
                    <li><NavLink className={({isActive}) => isActive ? 'active-menu-link' : 'default-menu-link'}
                                 to="/contact">Contact</NavLink></li>
                    {isAuth ?
                        <button type="button" onClick={logout}>Log uit</button>
                        :
                        <div>
                            <li><NavLink className={({isActive}) => isActive ? 'active-menu-link' : 'default-menu-link'}
                                         to="/signIn">Inloggen</NavLink></li>

                            <li><NavLink className={({isActive}) => isActive ? 'active-menu-link' : 'default-menu-link'}
                                         to="/signUp">Registreren</NavLink></li>
                        </div>
                    }
                </ul>
            </div>
        </nav>
    );
}

export default NavBar;
