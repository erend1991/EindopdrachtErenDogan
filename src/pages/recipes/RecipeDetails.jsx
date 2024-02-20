import { useEffect, useState } from 'react';
import {Link, useParams} from 'react-router-dom';
import axios from 'axios';
import './RecipesDetails.css'

function RecipeDetails() {
    const [recipe, setRecipe] = useState('');

    const {id} = useParams();


    useEffect(() => {
        async function fetchRecipeDetails() {
            try {
                const data = await axios.get(`https://api.edamam.com/api/recipes/v2/${id}?type=public&app_id=17ed807b&app_key=527f06e4d596aa8bb42802f7ab70ef6c`,
                    {
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

    console.log(" recipe", recipe)


    return (<>
        <div className="recipe-details-container">
            {recipe && Object.keys(recipe).length > 0 ? (
                <>
                    <div className="recipe-info">
                        <p className="recipe-label">{recipe.label}</p>
                        <img className="recipe-image" src={recipe.image} alt={recipe.label}/>
                    </div>
                    <div className="ingredients-container">
                        <h3>Ingredients:</h3>
                        <ul className="ingredients-list">
                            {recipe.ingredientLines.map((ingredient, index) => (
                                <li key={index}>
                                    {ingredient}
                                </li>
                            ))}
                        </ul>
                    </div>
                </>
            ) : (
                <p>Loading...</p>
            )}
        </div>
            <Link className="nav-container" to="/">Ga terug naar de homepagina</Link>
        </>
    );
}



export default RecipeDetails;
