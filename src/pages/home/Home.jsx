import './Home.css'
import SearchBar from "../../components/searchBar/SearchBar.jsx";
import Header from "../../components/header/Header.jsx";

function Home(){

    return(
        <>
                <header className="header-outer-content-container">
                    <h1>Wat eten we vandaag!</h1>
                    <div className="inner-content-container">
                        <Header/>
                        <SearchBar/>
                        <div>
                        </div>
                    </div>
                </header>
            </>



    )

}

export default Home