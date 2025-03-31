import React, { useState } from 'react';
import styles from "./LogIn.module.css";

const LogIn = () => {
    const [isSignIn, setIsSignIn] = useState(true);

    const handleToggle = (event) => {
        event.preventDefault();
        setIsSignIn((prev) => !prev);
    };

    return (
        <div className={`${styles.login_container} ${isSignIn ? styles.sign_in_active : styles.sign_up_active}`}>
            <section>
                <div className={styles.login_wrapper}>
                <a href="#" className={styles.close_btn}>Close</a>
                    <div className={styles.form_container}>
                        {isSignIn ? (
                            <form>
                                <h2>Sign In</h2>
                                <div className={styles.input_group}>
                                    <input type="text" required />
                                    <label>username</label>
                                </div>
                                <div className={styles.input_group}>
                                    <input type="password" required />
                                    <label>password</label>
                                </div>
                                <div className={styles.remember}>
                                    <a href="#" className={styles.forgot_password}>Forgot your password?</a>
                                </div>

                                <button className={styles.s_button} type="submit">Sign In</button>
                                <div className={styles.signup_link}>
                                    <p> 
                                    <span onClick={handleToggle} className={styles.toggle_text}> Sign Up</span>
                                    </p>
                                </div>
                            </form>
                        ) : (
                            <form>
                                <h2>Sign Up</h2>
                                <div className={styles.input_group}>
                                    <input type="text" required />
                                    <label>username</label>
                                </div>
                                <div className={styles.input_group}>
                                    <input type="e-mail"  required />
                                    <label>e-mail</label>
                                </div>
                                <div className={styles.input_group}>
                                    <input type="password" required />
                                    <label>password</label>
                                </div>
                                <div className={styles.remember}>
                                    <label><input type="checkbox" /> I agree to the terms & conditions</label>
                                </div>

                                <button className={styles.s_button}  type="submit">Sign Up</button>
                                <div className={styles.signup_link}>
                                    <p>
                                        <span onClick={handleToggle} className={styles.toggle_text}> Sign In</span>
                                    </p>
                                </div>
                            </form>
                        )}
                    </div>
                </div>
            </section>
        </div>
    );
}

export default LogIn;
