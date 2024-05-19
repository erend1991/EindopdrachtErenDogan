import {useState} from 'react';
import axios from 'axios';
import Button from "../button/Button.jsx";
import './SearchBar.css'
import RecipeCard from "../recipeCard/RecipeCard.jsx";
import {useForm} from "react-hook-form";
import SelectBox from "../selectBox/SelectBox.jsx";
import ErrorMessage from "../errorMessage/ErrorMessage.jsx";

function SearchBar() {
    const [recipes, setRecipes] = useState([]);
    const [error, setError] = useState(false);
    const {register, handleSubmit, setValue} = useForm()


    const mealTypeOptions = [
        { value: 'Breakfast', label: 'ontbijt' },
        { value: 'Lunch', label: 'lunch' },
        { value: 'Dinner', label: 'diner' }
    ];

    const healthOptions = [
        { value: 'vegan', label: 'Vegan' },
        { value: 'vegetarian', label: 'Vegetarian' },
        { value: 'pescatarian', label: 'Pescatarian' },
        { value: 'pork-free', label: 'Zonder varkensvlees' },
        { value: 'gluten-free', label: 'Gluten vrij' }
    ];
    async function getRecipes(data) {
        setError(false);
        console.log(data);

        try {
            let apiQuery = `https://api.edamam.com/api/recipes/v2?type=public&app_id=17ed807b&app_key=527f06e4d596aa8bb42802f7ab70ef6c`;

            if (data.searchQuery) {
                apiQuery += `&q=${data.searchQuery}`;
            }

            if (data.mealType) {
                apiQuery += `&mealType=${data.mealType}`;
            }

            if (data.health) {
                apiQuery += `&health=${data.health}`;
            }

            const response = await axios.get(apiQuery, {
                headers: {
                    'Accept': 'application/json',
                    'Accept-Language': 'Dutch',
                },
            });
            if (response.data.hits.length === 0) {
                setError(true);
            } else {
                setRecipes(response.data.hits);
                setError(false);
            }

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
                        <SelectBox
                            label="Meal Type"
                            name="mealType"
                            options={mealTypeOptions}
                            register={register}
                        />
                        <SelectBox
                            label="Health"
                            name="health"
                            options={healthOptions}
                            register={register}
                        />

                    </label>

                    <Button type="submit" >Search</Button>

                </form>
            </div>
            <div className="outer-recipe-card-container">
                {error && <ErrorMessage message="Geen recepten gevonden!" />}                <div className="recipe-card-container"/>
                {recipes.map((recipe) => (
                    <RecipeCard
                        recipe={recipe}
                        uri={recipe.recipe.uri}
                        key={recipe.recipe.label}
                        title={recipe.recipe.label}
                        image={recipe.recipe.image}
                        ingredients={recipe.recipe.ingredients}
                    />

                ))
                }
            </div>
        </>
    )
}


export default SearchBar;
