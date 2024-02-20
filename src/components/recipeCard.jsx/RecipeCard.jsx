import { Link } from "react-router-dom";
import { useState } from "react";
import { FaHeart } from 'react-icons/fa'; // Import heart icon
import './RecipeCard.css';

function RecipeCard({ title, image, uri }) {
    const id = uri?.split('recipe_')[1];
    const [isFavorite, setFavorite] = useState(false);

    const toggleFavorite = () => {
        setFavorite(!isFavorite);
    };

    return (
        <div className="recipe-card-outer-containter">
        <div className="recipe-card">
            <Link to={`/recipes/${id}`}>
                <div className="favorite-button" onClick={toggleFavorite}>
                    {isFavorite ? <FaHeart className="favorite-icon" /> : <FaHeart className="favorite-icon" />}
                </div>
                <h3>{title}</h3>
                <img src={image} alt={title} />
            </Link>
        </div>
        </div>
    );
}

export default RecipeCard;
