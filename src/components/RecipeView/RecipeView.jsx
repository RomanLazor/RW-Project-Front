import React from 'react';
import styles from './RecipeView.module.css';

const RecipeView = () => {
  return (
    <div className={styles.container}>
      <div className={styles.recipeView}>
        <div className={styles.imageBox}>
          <img src="images/image4.png" alt="Recipe" />
          <div className={styles.recipeName}>RECIPE NAME</div>
        </div>
        <div className={styles.info}>
          <div className={styles.close}>✕</div>

          <label className={styles.orange}>Description</label>
          <p className={styles.text}>This is the recipe description.</p>

          <label className={styles.orange}>Ingredients</label>
          <ul className={styles.ingredients}>
            <li>Ingredient 1</li>
            <li>Ingredient 2</li>
          </ul>

          <div className={styles.categories}>
            <span>Breakfast</span>
            <span>Sweet</span>
          </div>

          <button className={styles.saveButton}>Save</button>
        </div>
      </div>
    </div>
  );
};

export default RecipeView;
