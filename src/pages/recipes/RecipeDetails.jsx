import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

function RecipeDetails() {
    const [recipe, setRecipe] = useState('');

    const { id } = useParams();


    useEffect(() => {
        async function fetchRecipeDetails() {
            try {
                const data = await axios.get(`https://api.edamam.com/api/recipes/v2?type=public&q=${id}&app_id=17ed807b&app_key=527f06e4d596aa8bb42802f7ab70ef6c`);
                setRecipe(data);
            } catch (error) {
                console.error('Error fetching recipe details:', error);
            }
        }

        if (id) {
            fetchRecipeDetails();
        }
    }, [id]);

    return (
        <div>
            {console.log(" recipe", recipe)}
            {recipe && Object.keys(recipe).length > 0 ? (
                <>
                    <p>Title: {recipe.recipe.label}</p>
                    <img src={recipe.recipe.image} alt={recipe.recipe.label}/>
                    <ul>
                        {recipe.ingredients.map((ingredient) => (
                            <li key={`${ingredient.ingredients.label}-${ingredient.label}`}>
                                {ingredient.ingredients.name}
                            </li>
                        ))}
                    </ul>
                </>
            ) : (
                <p>Loading...</p>
            )}
        </div>
    );
}

export default RecipeDetails;
