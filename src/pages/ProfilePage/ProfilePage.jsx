import React, { useState } from "react";
import styles from "./ProfilePage.module.css";
import Header from "../../components/Header/Header";
import { Link } from "react-router-dom";
import Footer from "../../components/Footer/Footer";
import SettingsModal from "./SettingsModal";
import RecipeView from "../../components/RecipeView/RecipeView";

const ProfilePage = () => {
  const [isSettingsOpen, setIsSettingsOpen] = useState(false);
  const [isRecipeOpen, setIsRecipeOpen] = useState(false);

  const AddedRecepies = [];
  const SavedRecepies = []; 

  const toggleSettings = () => setIsSettingsOpen((prev) => !prev);
  const openRecipeView = () => setIsRecipeOpen(true);
  const closeRecipeView = () => setIsRecipeOpen(false);

  return (
    <>
      <Header />
      <div className={styles.container}>
        <div className={styles.profileSection}>
          <div className={styles.textContainer}>
            <p className={styles.placeholderText}>email</p>
            <p className={styles.placeholderText}>short bio</p>
            <p className={styles.placeholderText}>registration date</p>
            <Link to="/addrecipe">
              <button className={styles.addButton}>Create Recipe</button>
            </Link>
          </div>
          <div className={styles.profileImageContainer}>
            <img
              src="ProfilePage/userimg.jfif"
              alt="Profile"
              className={styles.profileImage}
            />
            <p className={styles.username}>USERNAME</p>
            <button onClick={toggleSettings} className={styles.settingsButton}>
              <img
                className={styles.wheel}
                src="ProfilePage/image.png"
                alt="Settings"
              />
            </button>
            <SettingsModal
              isSettingsOpen={isSettingsOpen}
              toggleSettings={toggleSettings}
              userImage="ProfilePage/userimg.jfif"
              username="USERNAME"
            />
          </div>
        </div>

        <div className={styles.loremSection}>
          <h1 className={styles.loremText}>My Creations</h1>
        </div>

        {AddedRecepies.length === 0 ? (
          <p className={styles.noRecipes}>No added recipes yet.</p>
        ) : (
          <div className={styles.imageGrid_1}>
            {AddedRecepies.map((num) => (
              <div
                key={num}
                className={styles.imageCard}
                onClick={openRecipeView}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => {
                  if (e.key === "Enter") openRecipeView();
                }}
              >
                <img
                  src={`images/image${num}.png`}
                  alt={`Recipe ${num}`}
                  className={styles.gridImage}
                />
                <p className={styles.imageCaption}>RECIPE {num}</p>
                <span className={styles.arrow}>↗</span>
              </div>
            ))}
          </div>
        )}

        <div className={styles.loremSection}>
          <h1 className={styles.loremText}>Taste Collection</h1>
        </div>

        {SavedRecepies.length === 0 ? (
          <p className={styles.noRecipes}>No saved recipes yet.</p>
        ) : (
          <div className={styles.imageGrid_1}>
            {SavedRecepies.map((num) => (
              <div
                key={num}
                className={styles.imageCard}
                onClick={openRecipeView}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => {
                  if (e.key === "Enter") openRecipeView();
                }}
              >
                <img
                  src={`images/image${num}.png`}
                  alt={`Recipe ${num}`}
                  className={styles.gridImage}
                />
                <p className={styles.imageCaption}>RECIPE {num}</p>
                <span className={styles.arrow}>↗</span>
              </div>
            ))}
          </div>
        )}
      </div>

      {isRecipeOpen && <RecipeView onClose={closeRecipeView} />}
      <Footer />
    </>
  );
};

export default ProfilePage;
