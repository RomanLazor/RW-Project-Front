import React, { useState } from "react";
import styles from "./ProfilePage.module.css";
import Header from "../../components/Header/Header";
import { Link } from "react-router-dom";
import Footer from "../../components/Footer/Footer";
import SettingsModal from "./SettingsModal";

const ProfilePage = () => {
  const [isSettingsOpen, setIsSettingsOpen] = useState(false);

  const toggleSettings = () => {
    setIsSettingsOpen((prev) => !prev);
  };

  return (
    <>
      <Header />
      <div className={styles.container}>
        <div className={styles.profileSection}>
          <div className={styles.textContainer}>
            <p className={styles.placeholderText}>email</p>
            <p className={styles.placeholderText}>short bio</p>
            <p className={styles.placeholderText}>regisrtation date</p>
            <Link to="/addrecipe">
            <button className={styles.addButton}>add new</button>
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
              <img className={styles.wheel} src="ProfilePage/image.png" alt="Settings" />
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
          <h1 className={styles.loremText}>My Creations </h1>
          <button className={styles.moreButton}>more</button>
        </div>
                        {/*} Тут треба прикрутити функцію відображення доданих рецептів {*/}
        <div className={styles.imageGrid_1}>
          <div className={styles.imageCard}>
            <img
              src="images/image1.png"
              alt="Granola"
              className={styles.gridImage}
            />
            <p className={styles.imageCaption}>GRANOLA WITH FRUITS</p>
            <Link href="#" rel="noopener noreferrer" className={styles.arrowButton}>
              <span className={styles.arrow}>↗</span>
            </Link>
          </div>
          <div className={styles.imageCard}>
            <img
              src="images/image2.png"
              alt="Pasta with Mushrooms"
              className={styles.gridImage}
            />
            <p className={styles.imageCaption}>PASTA WITH MUSHROOMS</p>
            <Link href="#" rel="noopener noreferrer" className={styles.arrowButton}>
              <span className={styles.arrow}>↗</span>
            </Link>
          </div>
          <div className={styles.imageCard}>
            <img
              src="images/image3.png"
              alt="Pasta with Shrimp"
              className={styles.gridImage}
            />
            <p className={styles.imageCaption}>PASTA WITH SHRIMP</p>
            <Link href="#" rel="noopener noreferrer" className={styles.arrowButton}>
              <span className={styles.arrow}>↗</span>
            </Link>
          </div>
          <div className={styles.imageCard}>
            <img
              src="images/image4.png"
              alt="Pancakes with Fruits"
              className={styles.gridImage}
            />
            <p className={styles.imageCaption}>PANCAKES WITH FRUITS</p>
            <Link href="#" rel="noopener noreferrer" className={styles.arrowButton}>
              <span className={styles.arrow}>↗</span>
            </Link>
          </div>
        </div>
      </div>

      <div className={styles.imageGridWrapper}>
        <div className={styles.loremSection_1}>
          <h1 className={styles.loremTextB}>Taste Collection</h1>
          <a href="#recipe2" className={styles.moreButton}>
            <span className={styles.moreButton}>more</span>
          </a>
        </div>
        <div className={styles.imageContainer}>
          <div id="recipe2" className={styles.imageGrid}>
            <div className={styles.imageCard}>
              <img
                src="LastRecepies/1.png"
                alt="Vatrushki"
                className={styles.gridImageLarge}
              />
              <p className={styles.imageCaptionB}>VATRUSHKI</p>
              <Link href="#" rel="noopener noreferrer" className={styles.arrowButtonB}>
                <span className={styles.arrow}>↗</span>
              </Link>
            </div>
            <div className={styles.smallImagesRow}>
              <div className={styles.imageCard}>
                <img
                  src="LastRecepies/2.png"
                  alt="Homemade Croissant"
                  className={styles.gridImage}
                />
                <p className={styles.imageCaption}>HOMEMADE CROISSANT</p>
                <Link href="#" rel="noopener noreferrer" className={styles.arrowButton}>
                  <span className={styles.arrow}>↗</span>
                </Link>
              </div>
              <div className={styles.imageCard}>
                <img
                  src="LastRecepies/3.png"
                  alt="Greek Salad"
                  className={styles.gridImage}
                />
                <p className={styles.imageCaption}>GREEK SALAD</p>
                <Link href="#" rel="noopener noreferrer" className={styles.arrowButton}>
                  <span className={styles.arrow}>↗</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ProfilePage;