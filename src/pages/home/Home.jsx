import './Home.css'
import SearchBar from "../../components/searchBar/SearchBar.jsx";
import Header from "../../components/header/Header.jsx";

    function Home() {


        return (
            <>
                <header className="header-outer-content-container">
                    <div className="inner-content-container">
                        <Header />
                        <h2>Wat eten we vandaag.....</h2>
                        <SearchBar />
                        </div>
                </header>
            </>


        )

}

export default Home