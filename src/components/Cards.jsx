import React from "react";
import Card from "./Card";
import styles from './Cards.module.css';


export default function Cards({ cities, onClose}) {
  // acá va tu código
  // tip, podés usar un map
  // console.log("cards", cities);
  return <div className={styles.cards} >
    {cities && cities.map((city) => (
      <Card
        key={city.id}
        name={city.name}
        max={city.max}
        min={city.min}
        img={city.img}
        onClose={() => onClose(city.id)}
      />
    ))}
  </div>;
}