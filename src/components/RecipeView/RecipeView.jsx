import React from 'react';
import styles from './RecipeView.module.css';

const RecipeView = ({ onClose }) => {
  return (
    <div className={styles.overlay}>
      <div className={styles.recipeView}>
        <div className={styles.imageBox}>
          <img src="images/image4.png" alt="Recipe" />
          <div className={styles.recipeName}>RECIPE NAME</div>
        </div>
        <div className={styles.info}>
          <div className={styles.close} onClick={onClose}>✕</div>

          <label className={styles.orange}>Description</label>
          <p className={styles.text}>lorem  </p>

          <label className={styles.orange}>Ingredients</label>
          <ul className={styles.ingredients}>
            <li>Ingredient 1</li>
            <li>Ingredient 2</li>
            <li>Ingredient 3</li>
            <li>Ingredient 4</li>
          </ul>

          <div className={styles.categories}>
            <span>category</span>
            <span>category2</span>
            <span>category3</span>
            <span>subcategory</span>
          </div>

          <button className={styles.saveButton}>Save</button>
        </div>
      </div>
    </div>
  );
};

export default RecipeView;
