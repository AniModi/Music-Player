import React, { useState } from 'react';
import styles from "./NavBar.module.css"
import logo from "./../logo.svg"
import profilePhoto from "./../images/profile.png"
import { Link } from 'react-router-dom';
const NavBar = () => {

    const [profileHide,setProfileHide] = useState(true);
    const setHide = ()=>{
        setProfileHide(prev=>!prev);
    }
    return(
        <>
            <nav className={styles.nav}>
                <div className={styles.logo}><img src={logo} alt="logo" className={styles.img}></img></div>
                <div className={styles.search}>
                    <input className={styles.input} type={"text"} placeholder={"Type to search...."}></input>
                </div>
                <div className={styles.profile}>
                    <div className={styles.profileBtn}>
                        <div className={styles.circle} onClick={setHide}>
                        <img src={profilePhoto} alt="profile" className={styles.profileImg}></img>
                        </div>
                        <div className={`${styles.dropDown} ${profileHide===true?styles.hide:""}`}>
                            <div><Link to={"/login"}>Login</Link></div>
                            <div><Link to={"/register"}>Signup</Link></div>
                            <div><Link to={"/home"}>Home</Link></div>
                            <div><Link to={"/"}>{"My Playlists"}</Link></div>
                            <div><Link to={"/"}>{"Create Playlist"}</Link></div>
                        </div>
                    </div>
                </div>
            </nav>
        </>
    );
}

export default NavBar;