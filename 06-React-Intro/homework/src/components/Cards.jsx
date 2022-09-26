import React from 'react';
import Card from './Card';

export default function Cards(props) {
  // acá va tu código
  // tip, podés usar un map
  return (
    <div>
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