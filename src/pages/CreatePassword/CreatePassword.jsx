import React from 'react';
import {Link, useNavigate, useSearchParams} from 'react-router-dom';
import styles from "./CreatePassword.module.css";

const API_URL = process.env.REACT_APP_API_URL;


const CreatePassword = () => {
    const [password, setPassword] = React.useState('');
    const navigate = useNavigate();
    const [searchParams, setSearchParams] = useSearchParams();

    const ResetPassword = async (e) => {
        e.preventDefault();
        try {
            const token = searchParams.get("token");
            const response = await fetch(`${API_URL}/api/users/recover-password?token=${token}`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    newPassword: password,
                })
            })

            const data = await response.json();

            if(!response.ok) {
                console.log(response);
                throw new Error(data.message || "Register failed");
            }

            console.log('Register successful', data);
            navigate("/");
        } catch (error) {
            console.log("Register error", error);
            return null;
        }
    }

    return (
        <div className={styles.container}>
            <section>
                <div className={styles.reset_wrapper}>
                <Link to="/profile">
                <a href="#" className={styles.close_btn}>X</a>
                </Link>
                    <div className={styles.form_container}>
                            <form>
                                <h2>Create new password</h2>
                                <div className={styles.input_group}>
                                    <input type="password"
                                           onChange={e => setPassword(e.target.value)}
                                           required />
                                    <label>Password</label>
                                </div>
                                
                                <Link to="/changed_password"> 
                                <button onClick={ResetPassword} className={styles.close_btn} type="submit" >Reset Password</button>
                                </Link>
                            </form>
                       
                    </div>
                </div>
            </section>
        </div>
    );
}

export default CreatePassword;
