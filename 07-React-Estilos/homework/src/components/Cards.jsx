import React from 'react';
import Card from './Card';
import styles from '../styles/Cards.module.css'

export default function Cards(props) {
  // acá va tu código
  // tip, podés usar un map
  return (
    <div className={styles.div}>
      {
        props.cities.map((el, index) => {
          return <Card
          max={el.main.temp_max}
          min={el.main.temp_min}
          name={el.name}
          img={el.weather[0].icon}
          onClose={() => alert(el.name)}
          key={index}
          />
        })
      } 
    </div>
  )
};