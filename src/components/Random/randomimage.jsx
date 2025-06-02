import React, { useState } from "react";
import Card from "../Card/Card";
import styles from "./randomimage.module.css";

const localImages = [
  { src: "/images/image1.png", title: "Borscht" },
  { src: "/images/image2.png", title: "Varenyky" },
  { src: "/images/image3.png", title: "Deruny" },
  { src: "/images/image4.png", title: "Holubtsi" },
];

function getThreeRandomImages() {
  const shuffled = [...localImages].sort(() => 0.5 - Math.random());
  return shuffled.slice(0, 3);
}

const RandomCardSet = () => {
  const [images, setImages] = useState(getThreeRandomImages());
  const [animating, setAnimating] = useState(false);

  const handleRandomize = () => {
    setAnimating(true);
    setTimeout(() => {
      setImages(getThreeRandomImages());
      setAnimating(false);
    }, 2000);
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
                index === 0 ? styles.cardLeft : index === 1 ? styles.cardCenter : styles.cardRight
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