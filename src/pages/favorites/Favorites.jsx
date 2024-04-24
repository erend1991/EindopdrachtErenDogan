// Favorites.js
import  { useEffect, useState } from 'react';
import './Favorites.css';

function Favorites (){
    const [favorites, setFavorites] = useState([]);

    useEffect(() => {
        const storedFavorites = JSON.parse(localStorage.getItem('favorites')) || [];
        setFavorites(storedFavorites);
    }, [localStorage]);

    const removeFromFavorites = (index) => {
        const updatedFavorites = [...favorites];
        updatedFavorites.splice(index, 1);
        setFavorites(updatedFavorites);
        localStorage.setItem('favorites', JSON.stringify(updatedFavorites));
    };

    return (
        <div className="favorites-container">
            <h2>Favorieten</h2>
            {favorites.length > 0 ? (
                <section className="list">
                    {favorites.map((fav, index) => (
                        <article key={index} className="list-item">
                            <h3>{fav.label}</h3>
                            <img className="fav-image" src={fav.image} alt={fav.label} />
                            <h4>Ingredienten:</h4>
                            {fav.ingredientLines && fav.ingredientLines.length > 0 ? (
                                <ul className="ingredients-list">
                                    {fav.ingredientLines.map((ingredient, index) => (
                                        <li key={index}>
                                            {ingredient}
                                        </li>
                                    ))}
                                </ul>
                            ) : (
                                <p>No ingredients available.</p>
                            )}
                            <button type="submit" onClick={() => removeFromFavorites(index)}>Verwijder uit favorieten</button>
                        </article>
                    ))}
                </section>
            ) : (
                <p className="no-favorites">Nog geen favorieten toegevoegd.</p>
            )}
        </div>
    );
}


    export default Favorites;
