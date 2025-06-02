import React from 'react';
import styles from './UserRecepie.module.css';

const UserRecipe = () => {
  return (
    <div className={styles.backdrop}>
      <div className={styles.recipeView}>
        <div className={styles.imageBox}>
          <img src="images/image3.png" alt="Recipe" />
          <div className={styles.recipeName}>RECIPE NAME</div>
        </div>

        <div className={styles.info}>
          <div className={styles.close}>✕</div>

          <label className={styles.orange}>Description</label>
          <p className={styles.text}>
            lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ut enim ad
          </p>

          <label className={styles.orange}>Ingredients</label>
          <ul className={styles.ingredients}>
            <li>lorem ipsum</li>
            <li>lorem ipsum</li>
            <li>lorem ipsum</li>
            <li>lorem ipsum</li>
          </ul>

          <div className={styles.categories}>
            <span>category</span>
            <span>subcategory</span>
          </div>

          <div className={styles.buttons}>
            <button className={styles.changeButton}>change</button>
            <button className={styles.deleteButton}>delete</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserRecipe;
