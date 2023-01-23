import React from 'react';
import styles from "./NavBar.module.css"
import logo from "./../logo.svg"


const NavBar = () => {
    return(
        <>
            <nav className={styles.nav}>
                <div className={styles.logo}><img src={logo} alt="logo" className={styles.img}></img></div>
                <div className={styles.links}>
                    <div className={styles.link}>{"Library"}</div>
                    <div className={styles.link}>{"Explore"}</div>
                    <div className={styles.link}>{"Trending"}</div>
                </div>
                <div className={styles.search}>
                    <input className={styles.input} type={"text"} placeholder={"Search your favorite artists and songs"}></input>
                </div>
            </nav>
        </>
    );
}

export default NavBar;