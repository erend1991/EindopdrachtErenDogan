import {useState} from 'react';
import axios from 'axios';
import Button from "../../button/Button.jsx";
import './SearchBar.css'
import RecipeCard from "../recipeCard.jsx/RecipeCard.jsx";
import {useForm} from "react-hook-form";

function SearchBar() {
    const [recipes, setRecipes] = useState([]);
    const [error, setError] = useState(false);
    const {register, handleSubmit, setValue} = useForm()


    async function getRecipes(data) {
        setError(false)
        console.log(data)
        try {
            const response = await axios.get(`https://api.edamam.com/api/recipes/v2?type=public&q=${data.searchQuery}&app_id=17ed807b&app_key=527f06e4d596aa8bb42802f7ab70ef6c&health=${data.health}&mealType=${data.mealType}`,
                {
                    headers: {
                        'Accept': 'application/json',
                        'Accept-Language': 'Dutch',
                    },
                })
            setRecipes(response.data.hits);
            console.log(response.data.hits)
        } catch (error) {
            console.error('Geen recepten gevonden!', error);
            setError(true)
        }
    }

    return (
        <>
            <div className='outer-searchbar'>
                <form className='inner-searchBar' onSubmit={handleSubmit(getRecipes)}>
                    <input
                        type="text"
                        placeholder="Zoeken"
                        {...register('searchQuery')}
                        onChange={(e) => {
                            setValue('searchQuery', e.target.value)
                        }}
                    />
                    <label>
                        <select {...register('mealType')}>
                            <option value="">-- Selecteer een categorie --</option>
                            <option value=""> </option>
                            <option value="Breakfast">ontbijt</option>
                            <option value="Lunch">lunch</option>
                            <option value="Dinner">diner</option>
                        </select>
                    </label>

                    <label>
                        <select  {...register('health')}>
                            <option value="">-- Selecteer een categorie --</option>
                            <option value=""> </option>
                            <option value="vegan">Vegan</option>
                            <option value="vegetarian">Vegetarian</option>
                            <option value="pescatarian">Pescatarian</option>
                            <option value="pork-free">Zonder varkensvlees</option>
                            <option value="gluten-free">Gluten vrij</option>
                        </select>
                    </label>

                    <Button type="submit" variant="primary">zoeken</Button>

                </form>
            </div>
            <div className="outer-recipe-card-container">
                {error && <p>Geen recepten gevonden!</p>}
                <div className="recipe-card-container"/>
                {recipes.map((recipe) => (
                    <RecipeCard
                        recipe={recipe}
                        uri={recipe.recipe.uri}
                        key={recipe.recipe.label}
                        title={recipe.recipe.label}
                        image={recipe.recipe.image}
                        ingredients={recipe.recipe.ingredients}/>

                ))
                }
            </div>
        </>
    )
}


export default SearchBar;
