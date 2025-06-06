import React, { useState } from "react";
import { Link } from "react-router-dom";
import Searchbar from "../Searchbar/Searchbar";
import styles from "./Header.module.css";

const Header = () => {
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  const toggleSearch = () => {
    setIsSearchOpen((prev) => !prev);
  };

  return (
    <div className={styles.header}>
      <div className={styles.group1}>
        <div className={styles.g1_item1}>
          <Link className={styles.link} to="/">Main</Link>
        </div>
        <div className={styles.g1_item2}>
          <Link className={styles.link} to="/categories">Categories</Link>
        </div>
      </div>

      <img src="/header/header.svg" alt="logo" className={styles.center_img} />

      <div className={styles.group2}>
        <div className={styles.g2_item1}>
          <Link className={styles.link} to="/map">Map</Link>
        </div>
        <div className={styles.g2_item1}>
          <Link className={styles.link} to="/about">About Us</Link>
        </div>
      </div>

      <div className={styles.right}>
        <button onClick={toggleSearch} className={styles.search_button}>
          <img src="/header/search.svg" alt="Пошук" className={styles.search_img} />
        </button>
        <Link className={styles.link} to="/profile">
          <img src="/header/profile.svg" alt="Профіль" className={styles.profile_img} />
        </Link>
      </div>

      <Searchbar isSearchOpen={isSearchOpen} toggleSearch={toggleSearch} />
    </div>
  );
};

export default Header;