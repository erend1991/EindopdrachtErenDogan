import { Link } from "react-router-dom";

function RecipeCard({ title, image, uri }) {
    const id = uri?.split('#')[1];
    console.log('id',id)
    return (
        <div className="recipe-card">
            <Link to={`/recipes/${id}`}>
                <h2>{title}</h2>
                <img src={image} alt={title} />
                <div className="recipe-details">
                </div>
            </Link>
        </div>
    );
}

export default RecipeCard;