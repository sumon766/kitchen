import React, {useEffect, useState} from "react";

const LatestRecipes = () => {
    const [recipes, setRecipes] = useState([]);

    useEffect(() => {
        const apiUrl = "https://api.edamam.com/api/food-database/v2/parser?app_id=bfcc42d1&app_key=79dc372926e730783e6ed602b6c76503&nutrition-type=cooking";

        const fetchData = async () => {
            try {
                const response = await fetch(apiUrl);
                const json = await response.json();
                console.log(json.hints);
                setRecipes(json.hints);
            } catch (error) {
                console.log(error);
            }
        }

        fetchData();
    }, []);

    return (
        <>
            <div>Here is the food data</div>
            <div className="recipes">
                <ul>
                   {recipes.map((recipe, index) => (
                        <li key={index}>
                            <h3>{recipe.food.label}</h3>
                            <p>Category: {recipe.food.category}</p>
                        </li>
                   ))}
                </ul>
            </div>
        </>
    );
}

export default LatestRecipes;