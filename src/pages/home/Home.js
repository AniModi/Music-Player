import React from 'react';
import NavBar from '../../components/NavBar';
import Songlist from '../../components/Songlist';
import styles from "./Home.module.css"


const obj = [
    {
        name: "Top songs",
        arr:[0,1,2,3,4,5,6],
        page:"1"
    },
    {
        name: "Hit songs",
        arr:[0,1,2,3,4,5,6],
        page:"2"
    },
    {
        name: "Songs you might like",
        arr:[0,1,2,3,4,5,6],
        page:"3"
    },
    {
        name: "Trending songs",
        arr:[0,1,2,3,4,5,6],
        page:"4"
    }
];



const Home = ()=>{
    return (
        <>
        <NavBar></NavBar>
        <div className={styles.container}>
            {
                obj.map(e=>
                    <Songlist page={e["page"]} name={e["name"]} arr={e["arr"]}></Songlist>
                )
            }
                
        </div>
        </>
    );
}

export default Home;