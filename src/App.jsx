import {useContext} from 'react'
import './App.css'
import {Route, Routes, Navigate} from 'react-router-dom';
import Home from "./pages/home/Home.jsx";
import Favorites from "./pages/favorites/Favorites.jsx";
import Contact from "./pages/contact/Contact.jsx";
import RecipeDetails from "./pages/recipes/RecipeDetails.jsx";
import SignIn from "./pages/signIn/SignIn.jsx";
import SignUp from "./pages/signUp/SignUp.jsx";
import NavBar from "./components/navBar/NavBar.jsx";
import {AuthContext} from "./AuthContext/AuthContext.jsx";
import Footer from "./components/footer/footer.jsx";


function App() {
    const {isAuth} = useContext(AuthContext);

    return (
        <>
            <NavBar/>
            <main>
                <Routes>
                    <Route path="/" element={<Home/>}/>
                    <Route path="/favorites" element={isAuth === true ? <Favorites/> : <Navigate to="/signin"/>}/>
                    <Route path="/contact" element={<Contact/>}/>
                    <Route path="/recipes/:id" element={<RecipeDetails/>}/>
                    <Route path="/signin" element={<SignIn/>}/>
                    <Route path="/signup" element={<SignUp/>}/>

                </Routes>
            </main>
            <Footer/>

        </>
    )
}

export default App
