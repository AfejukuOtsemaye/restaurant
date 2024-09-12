import React from 'react';
import './Header.css';

const Header = () => {
  return (
    <div className='header'>
      <div className="headerContent">
        <h1>Order your favourite food here</h1>
        <p>
            Our dishes are prepared with so much love for a special one like you, our chefs are 
            professionals and we bring you an array of diverse delectable and palatable dishes.
            Ranging from our local dishes to intercontinental.
        </p>
        <button> View Menu </button>
      </div>
    </div>
  )
}

export default Header
