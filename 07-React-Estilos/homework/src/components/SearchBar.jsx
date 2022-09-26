import React from 'react';
import styles from '../styles/SearchBar.module.css'

export default function SearchBar(props) {
  // acá va tu código
  return( 
    <>
      <input className={styles.input} type="text" placeholder='Ciudad...'/>
      <button className={styles.btn} onClick={()=>props.onSearch('Urlingan')}>Agregar</button>
    </>
  )
};