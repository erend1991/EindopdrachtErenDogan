import './Home.css'
import SearchBar from "../../components/searchBar/SearchBar.jsx";
import Header from "../../components/header/Header.jsx";
import food1 from "../../assets/food1.jpg"

    function Home() {


        return (
            <>
                <header className="header-outer-content-container">
                    <div className="inner-content-container">
                        <Header img={food1} alt={food1} title="Wat eten we vandaag..."
                        />
                        <SearchBar />
                        </div>
                </header>
            </>


        )

}

export default Home