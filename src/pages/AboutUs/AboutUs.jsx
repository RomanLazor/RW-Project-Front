import React from "react";
import styles from "./AboutUs.module.css";

import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header"
import CategorySlider from "../../components/CategorySlider/CategorySlider";

const AboutUs = () => {

    return (
        <>
        <div className={styles.AboutUs}>
        <section className={styles.heroSection}>
          <div className={styles.textWrapper}>
            <h1 className={styles.mainTitle}>
              LOREM <span className={styles.underline}>IPSUM</span>
              <br />
              DOLOR SI AMET
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
                    <span className={styles.topText}>LOREM</span>
                    <img src="/mainpage/dump1.png" alt="dump" className={styles.inlineImage} />
                    <span className={styles.topText}>LOREM</span>
                </div>
                <div className={styles.bottomText}>
                    IPSUM DOLOR?
                </div>
            </h1>
       
          </div>
        </section>
        
        </>
    )
  }

export default AboutUs