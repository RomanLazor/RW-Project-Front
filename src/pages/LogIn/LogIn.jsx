import React from 'react';
import styles from "./LogIn.module.css";

const LogIn = () => {
    return (
        <div className={styles.login_container}>
            <section>
                <div className={styles.login_wrapper}>
                    <a href="#" className={styles.close_btn}>Close</a>
                    <div className="form-wrapper sign-in">
                        <form action="">
                            <h2>Sign In</h2>
                            <div className={styles.input_group}>
                                <input type="text" required />
                                <label>Username</label>
                            </div>
                            <div className={styles.input_group}>
                                <input type="password" required />
                                <label>Password</label>
                            </div>
                            <div className={styles.remember}>
                                <a href="#" className="forgot-pass">Forgot your password?</a>
                            </div>
                            <div className="google-button">
                                <a href="#">Sign in with Google</a>
                            </div>
                            <button type="submit">Sign In</button>
                            <div className="signUp-link">
                                <p>Don't have an account? <a href="#" className="signUpBtn-link">Sign Up</a></p>
                            </div>
                        </form>
                    </div>
                    <div className="form-wrapper sign-up">
                        <form action="">
                            <h2>Sign Up</h2>
                            <div className={styles.input_group}>
                                <input type="text" required />
                                <label>Username</label>
                            </div>
                            <div className={styles.input_group}>
                                <input type="email" required />
                                <label>Email</label>
                            </div>
                            <div className={styles.input_group}>
                                <input type="password" required />
                                <label>Password</label>
                            </div>
                            <div className={styles.remember}>
                                <label><input type="checkbox" /> I agree to the terms & conditions</label>
                            </div>
                            <div className="google-button">
                                <a href="#">Sign up with Google</a>
                            </div>
                            <button type="submit">Sign Up</button>
                            <div className="signUp-link">
                                <p>Already have an account? <a href="#" className="signInBtn-link">Sign In</a></p>
                            </div>
                        </form>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default LogIn;