import React from 'react'
import './menuPage.css';
import {food_menu } from '../../assets/assets';

const MenuPage = ({category, setCategory}) => {

  return (
    <div className='foodMenu' id='foodMenu'>
      <h1>Explore Our Menu</h1>
      <p className='foodMenu-text'>
        Our delight is in serving you nourishing home made food away from home just as you 
        would love it...so much delight 
      </p>
      <div className="foodMenu-list">
        {food_menu.map((item, index)=>{
          return(
            <div 
              onClick={
                ()=>setCategory(prev=>prev===item.menu_name ? "All" : item.menu_name)} 
              key={index} 
              className='foodMenu-item'>
              <img 
                  className={category===item.menu_name ? "active" : ""}  
                  src={item.menu_image}  alt='palatable dish'/>
              <p>{item.menu_name}</p>
            </div>

          )
        })}
      </div>
    </div>
  )
}

export default MenuPage
