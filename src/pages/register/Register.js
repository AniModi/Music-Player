import React from 'react';
import { Link } from 'react-router-dom';
import styles from "./Register.module.css";

const Register = () => {
    return (
        <>
        <div className={styles.bg}>
            <div className={styles.container}>
                <div className={styles.title}>
                    {"Create Your Free Account"}
                </div>
                <div className={styles.input}>
                    <div className = {styles.row}>
                        <label className={styles.label}>
                            {"Full Name"}
                            <input type={"text"} placeholder={"Enter your full name"}></input>
                        </label>
                        <label className={styles.label}>
                            {"Username"}
                            <input type={"text"} placeholder={"Enter your username"}></input>
                        </label>
                    </div>
                    <div className = {styles.row}>
                        <label className={styles.label}>
                            {"Email"}
                            <input type={"email"} placeholder={"Enter your email"}></input>
                        </label>
                        <label className={styles.label}>
                            {"Phone number (optional)"}
                            <input type={"number"} placeholder={"Enter your phone number"}></input>
                        </label>
                    </div>
                    <div className = {styles.row}>
                        <label className={styles.label}>
                            {"Country"}
                            <input type={"text"} placeholder={"Enter your country"}></input>
                        </label>
                        <label className={styles.label}>
                            {"Date of Birth"}
                            <input type={"date"}></input>
                        </label>
                    </div>
                    <div className = {styles.row}>
                        <label className={styles.label}>
                            {"Password"}
                            <input type={"password"} placeholder={"Enter your password"}></input>
                        </label>
                        <label className={styles.label}>
                            {"Confirm password"}
                            <input type={"password"} placeholder={"Enter the password again"}></input>
                        </label>
                    </div>
                </div>
                <div className={styles.btnCont}>
                    <button className={styles.btn}>Register</button>
                </div>
                <div className={styles.registerCont}>
                    <div className={styles.alAcc}>{"Already have an account?"}<Link to={"/login"} className={styles.login}>{"Login"}</Link></div>
                </div>
                <div className={styles.privacyCont}>
                    {"By signing up, you agree to our"}<div className={styles.terms}>{"Terms"}</div> {"and"} <div className={styles.terms}>{"Policy"}</div>
                </div>
            </div>
        </div>
        </>
    );
}

export default Register;