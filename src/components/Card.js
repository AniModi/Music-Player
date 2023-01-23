import React, { useEffect, useState } from "react";
import styles from "./Card.module.css";


const Card = (props) => {
  const [img,setImg] = useState("");
  useEffect(() => {
    const x = async () =>{
            const data = await fetch(`https://api.unsplash.com/search/photos?query=music%20cover&page=${props.page}&orientation=portrait`,{
                headers:{
                    Authorization: 'Client-ID 5__ewAhnd1B9EVmz17IU14mvupW8AYXtuIYYblxc_Uk'
                }
            });
            const res = await data.json();
            setImg(res["results"][props.index]["urls"]["regular"])
    }
    x()
  }, []);
  return (
    <>
      <div className={styles.container}>
        <div className={styles.image}>
            <img src={img} alt="img" className={styles.img}></img>
        </div>
        <div className={styles.details}>
          <div className={styles.name}>
            {"The best song"}
          </div>
          <div className={styles.type}>
            {"Song"}
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
