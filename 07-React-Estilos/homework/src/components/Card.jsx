import React from 'react';
import styles from '../styles/Card.module.css';
import '../styles/global.css'

export default function Card(props) {
  // acá va tu código
  return (
    <div className={styles.div}>
      <button onClick={props.onClose} className={styles.btn}>X</button>
      <h3 className={styles.h4}>{props.name}</h3>
      <div className={styles.div3}>
        <div className={styles.div2}>
          <p>Min</p>
          <p>{`${props.min}°`}</p>
        </div>
        <div className={styles.div2}>
          <p>Max</p>
          <p>{`${props.max}°`}</p>
        </div>
        <img className={styles.img} src={`http://openweathermap.org/img/wn/${props.img}@2x.png`} alt="Imagen del Clima"/>
      </div>
    </div>
  )
};