import React from 'react';
import Logo from '../logoHenry.png'
import SearchBar from './SearchBar.jsx';
import './Nav.css';

function Nav({onSearch}) {
  return (
    <>
      <nav>
        <div>
        <img src={Logo} alt="logo" />
        <h3>Henry - Weather App</h3>
        </div>
        <SearchBar onSearch={onSearch}/>
      </nav>
    </>
  );
};

export default Nav;
