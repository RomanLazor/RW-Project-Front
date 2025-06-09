import React, { useState, useRef } from "react";
import { Link } from "react-router-dom";
import styles from "./Searchbar.module.css";

const API_URL = process.env.REACT_APP_API_URL;

const Searchbar = ({ isSearchOpen, toggleSearch }) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [recentRecipes, setRecentRecipes] = useState([]);
  const [error, setError] = useState("");

  const debounceTimeout = useRef(null);

  const handleSearchChange = (event) => {
    const query = event.target.value;
    setSearchQuery(query);

    // Clear previous timeout if still waiting
    if (debounceTimeout.current) {
      clearTimeout(debounceTimeout.current);
    }

    // If empty string, reset results
    if (query.trim() === "") {
      setSearchResults([]);
      return;
    }


    // Set new debounce timeout
    debounceTimeout.current = setTimeout(() => {
      performSearch(query);
    }, 500); // 3 seconds
  };

  const performSearch = async (query) => {
    setError("")
    try {
      const res = await fetch(`${API_URL}/api/recipes/search`, {
        method: "POST",
        credentials: "include",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          search_text: query,
          category: null, // or you can support categories later
        }),
      });


      if (!res.ok) {
        const errorData = await res.json();
        console.log(errorData.message);
        setError(errorData.error);
        throw new Error(errorData.message);
      }

      const data = await res.json();
      console.log("DATA", data)
      if(!data.length > 0){
        setError(data.message);
      }

      // Assuming your `findRecipe` returns an array of recipes:
      setSearchResults(data);
    } catch (err) {
      console.error("Failed to perform search", err);
      setError(err.message)
      setSearchResults([]);
    }
  };

  const handleRecipeClick = (recipe) => {
    setRecentRecipes((prev) => {
      const updated = [recipe, ...prev.filter((r) => r.id !== recipe.id)];
      return updated.slice(0, 4);
    });
    toggleSearch();
  };

  return (
    isSearchOpen && (
      <div className={styles.search_window}>
        <div className={styles.search_bar}>
          <img src="/header/search.svg" alt="Search" className={styles.icon_img} />
          <input
            type="text"
            value={searchQuery}
            onChange={handleSearchChange}
            placeholder="Search recipes..."
            className={styles.search_input}
          />
          <button onClick={toggleSearch} className={styles.close_button}>✖</button>
        </div>
        {error? (
          <div className={styles.error}>
            {error}
          </div>
        ): ""}

        {searchResults.length > 0 ? (
          <div className={styles.results_section}>
            <div className={styles.results_text}>Results</div>
            <div className={styles.results_list}>
              {searchResults.map((recipe) => (
                <Link
                  to={`/recipe/${recipe.recipe_id}`}
                  key={recipe.recipe_id}
                  className={styles.result_card}
                  onClick={() => handleRecipeClick(recipe)}
                >
                  <img src={recipe.image_url} alt={recipe.title} className={styles.recipe_image} />
                  <p className={styles.recipe_name}>{recipe.title}</p>
                </Link>
              ))}
            </div>
          </div>
        ) : (
          recentRecipes.length > 0 && (
            <div className={styles.results_section}>
              <div className={styles.results_text}>Recent Recipes</div>
              <div className={styles.results_list}>
                {recentRecipes.map((recipe) => (
                  <Link
                    to={`/recipe/${recipe.recipe_id}`}
                    key={recipe.recipe_id}
                    className={styles.result_card}
                    onClick={() => handleRecipeClick(recipe)}
                  >
                    <img src={recipe.image_url} alt={recipe.title} className={styles.recipe_image} />
                    <p className={styles.recipe_name}>{recipe.title}</p>
                  </Link>
                ))}
              </div>
            </div>
          )
        )}
      </div>
    )
  );
};

export default Searchbar;
