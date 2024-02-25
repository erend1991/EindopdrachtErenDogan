import { Link } from "react-router-dom";
import './RecipeCard.css';

function RecipeCard({ title, image, uri,}) {
    const id = uri?.split('recipe_')[1];


    return (
        <div className="recipe-card-outer-containter">
        <div className="recipe-card">
            <Link to={`/recipes/${id}`}>
                <h3>{title}</h3>
                <img src={image} alt={title} />
            </Link>
        </div>
        </div>
    );
}

export default RecipeCard;
