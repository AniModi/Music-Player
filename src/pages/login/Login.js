import React from 'react';
import styles from "./Login.module.css"
import { Link } from 'react-router-dom';

const Login = () => {

    return (
        <>
        <div className={styles.bg}>
            <div className={styles.container}>
                <div className={styles.title}>
                    {"Login to Account"}
                </div>
                <div className={styles.titleDesc}>
                    {"Get access to your music, playlist and account"}
                </div>
                <div className={styles.input}>
                    <label>
                        {"Username"}
                        <input type={"text"} placeholder={"Enter your username here"} className={styles.username}/>
                    </label>
                    <label>
                        {"Password"}
                        <input type={"password"} placeholder={"Enter your password here"} className={styles.password}/>
                    </label>
                </div>
                <div className={styles.forgot}>
                    {"Forgot your password?"}
                </div>
                <div className={styles.btnCont}>
                    <button className={styles.btn}>Login</button>
                </div>
                <div className={styles.registerCont}>
                    <div className={styles.noAcc}>{"Don't have an account?"}<Link to={'/register'} className={styles.register}>{"Register"}</Link></div>
                </div>
            </div>
        </div>
        </>
    );
}

export default Login;