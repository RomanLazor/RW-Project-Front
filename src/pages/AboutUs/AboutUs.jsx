import React from "react";
import styles from "./AboutUs.module.css";

import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import CategorySlider from "../../components/CategorySlider/CategorySlider";

const AboutUs = () => {
  return (
    <>
    <Header/>
      <div className={styles.AboutUs}>
        <section className={styles.heroSection}>
          <div className={styles.textWrapper}>
            <h1 className={styles.mainTitle}>
              DAILY <span className={styles.underline}>INSPIRATION</span>
              <br />
            </h1>
          </div>
        </section>
      </div>

      <div className={styles.imageWrapper}>
        <img
          src="/mainpage/dump2.png"
          alt="dump"
          className={styles.heroImage}
        />
      </div>

      <section className={styles.section3}>
        <div className={styles.red_section_wrapper}>
          <h1 className={styles.whitetext}>
            <div className={styles.topText}>
              <span className={styles.topText}>WHY</span>
              <img src="/mainpage/dump1.png" alt="dump" className={styles.inlineImage} />
              <span className={styles.topText}>US?</span>
            </div>
            <div className={styles.bottomText}>
              
            </div>
          </h1>
        </div>

       
        <div className={styles.cardsContainer}>
          <div className={styles.card}>
            <h3>Cook without stress</h3>
            <p>Our recipes are easy to follow, even for beginners</p>
          </div>
          <div className={styles.card}>
            <h3>Discover authentic</h3>
            <p>Dishes from different regions of Ukraine with our interactive map</p>
          </div>
          <div className={styles.card}>
            <h3>Create and save</h3>
            <p>Manage your favorites, and personalize your cooking journey</p>
          </div>
        </div>
      </section>

      <div className={styles.container}>
      <div className={styles.content}>
        <div className={styles.textSection}>
          <h1 className={styles.heading}>Cooking Together</h1>
          <p className={styles.paragraph}>
            We believe that great food can be simple. Together with you, we’re building a space where every recipe tells a story, and every dish creates an experience.
          </p>
        </div>
        <img src="/LastRecepies/8.png" alt="Food" className={styles.image} />
      </div>
      <div className={styles.feedbackSection}>
        
        <h2 className={styles.feedbackHeading}>
        <span className={styles.leaveText}>LEAVE</span>
          <span className={styles.feedbackText}>
            YOUR <span className={styles.feedbackHighlight}>FEEDBACK</span>
          </span>
        </h2>
        <form className={styles.form}>
          <input type="text" placeholder="user name" className={styles.input} />
          <input type="email" placeholder="e-mail" className={styles.input} />
          <textarea placeholder="message..." className={styles.textarea}></textarea>
          <button type="submit" className={styles.button}>send</button>
        </form>
      </div>
      </div>
      <Footer/>

      
     
    </>
  );
};

export default AboutUs;
