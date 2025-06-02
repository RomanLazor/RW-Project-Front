import React, { useState } from "react";
import Card from "../Card/Card";
import styles from "./randomimage.module.css";

const fallbackImages = [
  { src: "/images/image1.png", title: "Borscht" },
  { src: "/images/image2.png", title: "Varenyky" },
  { src: "/images/image3.png", title: "Deruny" },
];

function getThreeRandomImages() {
  const shuffled = [...fallbackImages].sort(() => 0.5 - Math.random());
  return shuffled.slice(0, 3);
}

const RandomCardSet = () => {
  const [images, setImages] = useState(getThreeRandomImages());
  const [animating, setAnimating] = useState(false);

  const handleRandomize = async () => {
    setAnimating(true);
    try {
      const response = await fetch("http://localhost:3001/api/random-recipe");
      const data = await response.json();

      const recipe = data.recipe_id || data;
      const newImages = [
        fallbackImages[0],
        {
          src: recipe?.image_url || "/images/placeholder.png",
          title: recipe?.title || "Unknown recipe",
        },
        fallbackImages[2],
      ];

      setTimeout(() => {
        setImages(newImages);
        setAnimating(false);
      }, 2000);
    } catch (error) {
      console.error("Fetch error:", error);
      setAnimating(false);
    }
  };

  return (
    <div className={styles.red_section_wrapper}>
      <div className={styles.left_red_section}>
        <div className={styles.big_random_text}>RANDOM</div>
        <div className={styles.red_section_smaller_text}>
          Can’t decide? Let us surprise you!
        </div>
        <button className={styles.yellow_random_button} onClick={handleRandomize}>
          Start
        </button>
      </div>
      <div className={styles.right_red_section}>
        <div className={styles.cardsContainer}>
          {images.map((item, index) => (
            <div
              key={index}
              className={`${styles.card} ${
                index === 0
                  ? styles.cardLeft
                  : index === 1
                  ? styles.cardCenter
                  : styles.cardRight
              } ${animating ? styles.move : ""}`}
            >
              <Card image={item.src} />
              {index === 1 && <div className={styles.cardTitle}>{item.title}</div>}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default RandomCardSet;