import React from "react";
import styles from './Card.module.css';
import {IoCloseOutline} from 'react-icons/io5'

export default function Card(props) {
  // console.log('card', props);
  // acá va tu código
  return (
    <div className={`${styles.card} ${props.primary ? styles.primary : ''}`}>
      <span className={styles.names}>
        {props.name}
        {!props.primary && <button className={styles.buttonClose} onClick={props.onClose}><IoCloseOutline/></button>}
        </span>
      <img
        src={`http://openweathermap.org/img/wn/${props.img}@2x.png`}
        alt="icono del clima" />
        <div className={styles.temps}>
      <div className={styles.temp}>
        <span> Min </span>
        <span>{props.min}°</span>
      </div>
      <div className={styles.temp}>
        <span > Max </span>
        <span>{props.max}°</span>
      </div>
      </div>
    </div>
  );
}