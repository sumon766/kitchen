import React, {useEffect, useState} from "react";

const LatestRecipes = () => {
    const [recipes, setRecipes] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const apiUrl = "https://api.edamam.com/api/food-database/v2/parser?app_id=bfcc42d1&app_key=79dc372926e730783e6ed602b6c76503&nutrition-type=cooking";

        const fetchData = async () => {
            try {
                const response = await fetch(apiUrl);
                const json = await response.json();
                console.log(json.hints);
                setRecipes(json.hints);
                setLoading(false);
            } catch (error) {
                console.log(error);
                setError("Something went wrong, please contact the site administrator")
                setLoading(false);
            }
        }

        fetchData();
    }, []);

    return (
        <>
            <div>Here is the food data</div>

            {loading && <p>Loading data...</p>}

            {error && <p>{error}</p>}

            {!loading && !error && (
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
            )}

            
        </>
    );
}

export default LatestRecipes;