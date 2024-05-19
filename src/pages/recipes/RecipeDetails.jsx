// RecipeDetails.js
import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import axios from 'axios';
import './RecipesDetails.css';

function RecipeDetails() {
    const [recipe, setRecipe] = useState('');
    const [isFavorite, setIsFavorite] = useState(false);
    const { id } = useParams();

    useEffect(() => {
        async function fetchRecipeDetails() {
            try {
                const data = await axios.get(`https://api.edamam.com/api/recipes/v2/${id}?type=public&app_id=17ed807b&app_key=527f06e4d596aa8bb42802f7ab70ef6c`, {
                    headers: {
                        'Accept': 'application/json',
                        'Accept-Language': 'Dutch',
                    },
                });
                setRecipe(data.data.recipe);
            } catch (error) {
                console.error('Error fetching recipe details:', error);
            }
        }

        if (id) {
            fetchRecipeDetails();
        }
    }, [id]);



    function handleToggleFavorite ()  {
        if (!isFavorite) {
            const favorites = JSON.parse(localStorage.getItem('favorites')) || [];
            favorites.push(recipe);
            localStorage.setItem('favorites', JSON.stringify(favorites));
        } else {
            const favorites = JSON.parse(localStorage.getItem('favorites')) || [];
            const updatedFavorites = favorites.filter((fav) => fav.uri !== recipe.uri);
            localStorage.setItem('favorites', JSON.stringify(updatedFavorites));
        }

        setIsFavorite(!isFavorite);
    }

    return (
        <>
            <div className="recipe-details-container">
                {recipe && Object.keys(recipe).length > 0 ? (
                    <>
                        <article className="recipe-info">
                            <p className="recipe-label">{recipe.label}</p>
                            <img className="recipe-image" src={recipe.image} alt={recipe.label} />
                        </article>
                        <article className="ingredients-container">
                            <h3>Ingredients:</h3>
                            <ul className="ingredients-list">
                                {recipe.ingredientLines.map((ingredient, index) => (
                                    <li key={index}>
                                        {ingredient}

                                    </li>

                                ))}

                            </ul>
                            <button  type="submit" onClick={handleToggleFavorite}>
                                {isFavorite ? 'verwijderen van favorieten' : 'toevoegen aan favorieten'}
                            </button>
                        </article>
                    </>
                ) : (
                    <p>Loading...</p>
                )}
            </div>

            <Link className="nav-container" to="/">homepagina</Link>


        </>
    );
}

export default RecipeDetails;
