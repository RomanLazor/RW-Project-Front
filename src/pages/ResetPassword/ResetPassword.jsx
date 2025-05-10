import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import styles from './ResetPassword.module.css';

const API_URL = process.env.REACT_APP_API_URL;

const ResetPassword = () => {
    const location = useLocation();
    const [token, setToken] = useState(null);
    const [email, setEmail] = useState('');
    const [newPassword, setNewPassword] = useState('');
    const [message, setMessage] = useState('');
    const [error, setError] = useState('');

    useEffect(() => {
        const queryParams = new URLSearchParams(location.search);
        const tokenFromURL = queryParams.get('token');
        if (tokenFromURL) {
            setToken(tokenFromURL);
        }
    }, [location]);

    const handleEmailSubmit = async (e) => {
        e.preventDefault();
        setError('');
        setMessage('');
        try {
            const res = await fetch(`${API_URL}/api/users/forgot-password`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ email })
            });
            const data = await res.json();
            if (!res.ok) throw new Error(data.message);
            setMessage('Check your email for a reset link.');
        } catch (err) {
            setError(err.message || 'Something went wrong.');
        }
    };

    const handlePasswordSubmit = async (e) => {
        e.preventDefault();
        setError('');
        setMessage('');
        try {
            const res = await fetch(`${API_URL}/api/users/recover-password?token=${token}`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ newPassword })
            });
            const data = await res.json();
            if (!res.ok) throw new Error(data.message);
            setMessage('Password has been reset.');
        } catch (err) {
            setError(err.message || 'Something went wrong.');
        }
    };

    return (
        <div className={styles.container}>
            <section>
                <div className={styles.reset_wrapper}>
                    <Link to="/profile">
                        <button className={styles.close_btn}>X</button>
                    </Link>
                    <div className={styles.form_container}>
                        <form onSubmit={token ? handlePasswordSubmit : handleEmailSubmit}>
                            <h2>{token ? 'Enter New Password' : 'Reset Password'}</h2>

                            {message && <p className={styles.success}>{message}</p>}
                            {error && <p className={styles.error}>{error}</p>}

                            {!token ? (
                                <>
                                    <div className={styles.input_group}>
                                        <input
                                            type="email"
                                            value={email}
                                            onChange={(e) => setEmail(e.target.value)}
                                            required
                                        />
                                        <label>Email</label>
                                    </div>
                                    <button type="submit" className={styles.submit_btn}>
                                        Request password reset
                                    </button>
                                </>
                            ) : (
                                <>
                                    <div className={styles.input_group}>
                                        <input
                                            type="password"
                                            value={newPassword}
                                            onChange={(e) => setNewPassword(e.target.value)}
                                            required
                                        />
                                        <label>New Password</label>
                                    </div>
                                    <button type="submit" className={styles.submit_btn}>
                                        Set New Password
                                    </button>
                                </>
                            )}

                            {!token && (
                                <div className={styles.remember_container}>
                                    <p className={styles.text}>You remember your password?</p>
                                    <Link to="/login" className={styles.signInLink}>
                                        Sign In
                                    </Link>
                                </div>
                            )}
                        </form>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default ResetPassword;
