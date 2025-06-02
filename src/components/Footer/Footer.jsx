import React from "react";
import styles from "./Footer.module.css";
import { Link } from "react-router-dom";

const Footer = () => {
  
  return (
    <div className={styles.Footer}>
      <div className={styles.links_left}>
        <div>Social Media</div>
        <img src="/Footer/facebook.svg" className={styles.social} alt="facebook" />
        <img src="/Footer/twitter.svg" className={styles.social} alt="twitter" />
        <img src="/Footer/instagram.svg" className={styles.social} alt="instagram" />
        <div>Email:</div>
        <div>amnyamteam@gmail.com</div>
      </div>
      <img src="/Footer/footer.svg" className={styles.logo} alt="logo" />
      <div className={styles.links_right}>

        <Link to={"/"}>
        <div >Home</div>
        </Link>
        <Link  to={"/categories"}>
        <div>Categories</div>
        </Link>
        <Link  to={"/map"}>
        <div>Map</div>
        </Link>
        <Link  to={"/about"}>
        <div>About Us</div>
        </Link>

      </div>
    </div>
  )
}

export default Footer;