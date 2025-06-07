import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import styles from "./CreateNewPassword.module.css";

const API_URL = process.env.REACT_APP_API_URL;

const CreateNewPassword = () => {
    const navigate = useNavigate();

    const [oldPassword, setOldPassword] = useState('');
    const [newPassword, setNewPassword] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await fetch(`${API_URL}/api/users/change-password`, {
                method: "PUT",
                credentials: "include",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    oldPassword,
                    newPassword
                }),
            });

            const data = await response.json();

            if (!response.ok) {
                throw new Error(data.message || "Error changing password");
            }

            console.log("Password changed:", data.message);
            navigate("/changed_password");

        } catch (err) {
            console.error("Password change failed:", err.message);
            alert(err.message);
        }
    };

    return (
        <div className={styles.container}>
            <section>
                <div className={styles.reset_wrapper}>
                    <Link to="/profile">
                        <a href="#" className={styles.close_button}>X</a>
                    </Link>
                    <div className={styles.form_container}>
                        <form onSubmit={handleSubmit}>
                            <h2>Create New Password</h2>

                            <div className={styles.input_group}>
                                <input
                                    type="password"
                                    value={oldPassword}
                                    onChange={e => setOldPassword(e.target.value)}
                                    required
                                />
                                <label>old password</label>
                            </div>

                            <div className={styles.input_group}>
                                <input
                                    type="password"
                                    value={newPassword}
                                    onChange={e => setNewPassword(e.target.value)}
                                    required
                                />
                                <label>new password</label>
                            </div>

                            <button className={styles.close_btn} type="submit">Reset Password</button>
                        </form>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default CreateNewPassword;
