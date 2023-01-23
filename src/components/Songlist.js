import React from "react";
import Card from "./Card";
import styles from "./Songlist.module.css";


const Songlist = (props) => {
  return (
    <>
      <div className={styles.topSongs}>
        <div className={styles.title}>
          <p>{props.name}</p>
        </div>
        <div className={styles.songs}>
          {
              props.arr.map((e) => (
                <Card key={e} index={e} page={props.page}></Card>
              ))
        }
        </div>
      </div>
    </>
  );
};

export default Songlist;
