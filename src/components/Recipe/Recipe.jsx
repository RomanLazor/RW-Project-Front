import React, { useState } from 'react';
import styles from './Recipe.module.css';
import { Link } from 'react-router-dom';

const AddRecipeWithImage = ({ onClose }) => {
  const [imagePreview, setImagePreview] = useState(null);
  const [ingredients, setIngredients] = useState(['']);

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = (e) => {
      setImagePreview(e.target.result);
    };
    reader.readAsDataURL(file);
  };

  const handleAddIngredient = () => {
    setIngredients([...ingredients, '']);
  };

  const handleIngredientChange = (index, value) => {
    const updated = [...ingredients];
    updated[index] = value;
    setIngredients(updated);
  };

  return (
    <div className={styles.backdrop} onClick={onClose}>
      <div className={styles.recipeForm} onClick={(e) => e.stopPropagation()}>
        <div
          className={styles.uploadBox}
          onClick={() => document.getElementById('imageInput').click()}
        >
          <input
            type="file"
            id="imageInput"
            accept="image/*"
            hidden
            onChange={handleImageChange}
          />

          {imagePreview ? (
            <img src={imagePreview} alt="preview" className={styles.previewImage} />
          ) : (
            <div id="uploadContent">
              <div className={styles.uploadIcon}>⬆</div>
              <p>
                drop your image here, or{' '}
                <span className={styles.browse}>browse</span>
              </p>
            </div>
          )}

          <input
            type="text"
            className={styles.recipeName}
            placeholder="ENTER A RECIPE NAME..."
          />
        </div>

        <div className={styles.formInfo}>
          <label>Description</label>
          <textarea placeholder="l........"></textarea>

          <div className={styles.ingredients}>
            <label>Ingredients</label>
            <button
              className={styles.plusButton}
              type="button"
              onClick={handleAddIngredient}
            >
              +
            </button>
          </div>

          {ingredients.map((ingredient, index) => (
            <input
              key={index}
              type="text"
              placeholder={`Ingredient ${index + 1}`}
              value={ingredient}
              onChange={(e) => handleIngredientChange(index, e.target.value)}
              style={{
                border: 'none',
                borderBottom: '1px solid #ccc',
                background: 'transparent',
                fontSize: '13px',
                marginBottom: '8px',
                width: '100%',
              }}
            />
          ))}

          <div className={styles.dropdowns}>
            <select>
              <option>category</option>
            </select>
            <select>
              <option>subcategory</option>
            </select>
          </div>

          <button className={styles.addButton} type="button">
            add
          </button>
        </div>
      <Link to="/profile">
        <div className={styles.close} onClick={onClose}>✕</div>
      </Link>
      </div>
    </div>
  );
};

export default AddRecipeWithImage;
