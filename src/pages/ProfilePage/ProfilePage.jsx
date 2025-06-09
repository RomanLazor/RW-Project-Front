import React, { useState } from "react";
import styles from "./ProfilePage.module.css";
import Header from "../../components/Header/Header";
import {Link, useNavigate, useNavigation} from "react-router-dom";
import Footer from "../../components/Footer/Footer";
import SettingsModal from "./SettingsModal";
import RecipeView from "../../components/RecipeView/RecipeView";

const API_URL = process.env.REACT_APP_API_URL;

const ProfilePage = () => {
  const [isSettingsOpen, setIsSettingsOpen] = useState(false);
  const [isRecipeOpen, setIsRecipeOpen] = useState(false);

  const AddedRecepies = [];
  const SavedRecepies = []; 


  const openRecipeView = () => setIsRecipeOpen(true);
  const closeRecipeView = () => setIsRecipeOpen(false);
  
  const [profile, setProfile] = useState(null);
  const [loading, setLoading] = useState(true);

  const navigate = useNavigate();

  const fetchProfile = async () => {
    try {
      const res = await fetch(`${API_URL}/api/users/profile`, {
        method: "GET",
        credentials: "include",
      });
      if (!res.ok) {
        const errorData = await res.json();
        throw new Error(errorData.message);
      }

      const data = await res.json();
      setProfile(data);
      console.log(data);
    } catch (err) {
      console.error("Failed to load profile", err);
      setProfile(null);

      navigate("/login");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProfile();
  }, []);

  if (loading) {
    return <div>Loading profile...</div>;
  }

  if (!profile) {
    return <div>Failed to load profile.</div>;
  }

  const toggleSettings = () => {
    setIsSettingsOpen((prev) => !prev);
  };

  return (
    <>
      <Header />
      <div className={styles.container}>
        <div className={styles.profileSection}>
          <div className={styles.textContainer}>

            <p className={styles.placeholderText}>{profile.username.charAt(0).toUpperCase() + profile.username.slice(1)}</p>
            <p className={styles.placeholderText}>{profile.email}</p>
            <p className={styles.placeholderText}>{profile.bio || "Your bio"}</p>

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
            <p className={styles.username}>{profile.username.charAt(0).toUpperCase() + profile.username.slice(1)}</p>
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
              username={profile.username.charAt(0).toUpperCase() + profile.username.slice(1)}
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
