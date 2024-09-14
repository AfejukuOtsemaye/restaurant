import React, { useContext } from 'react';
import './foodItem.css';
import { Assets } from '../../assets/assets';
import { StoreContext } from '../../storecontext/storecontext';


export const FoodItem = ({id, name, price, description, image}) => {

    const {cartItems, addToCart, removeFromCart} = useContext(StoreContext);

  return (
    <div className='food-item'>
        <div className="food-item-img-container">
            <img className='food-item-img' src={image} alt="today's food " />
            {
                !cartItems[id]
                    ? <img className='add' onClick={()=>addToCart(id)} src={Assets.addIcon} alt='add item' />
                    : <div className='food-item-counter'>
                         <img onClick={()=>removeFromCart(id)} src={Assets.removeIcon} alt='' />
                         <p> {cartItems[id]} </p>
                         <img onClick={()=>addToCart(id)}  src={Assets.addIcon} alt='' />
                       </div>
                
            }
        </div>
        <div className="food-item-info">
            <div className="food-item-name">
                <p>{name}</p>
            </div>
            <p className="food-item-desc">
                {description}
            </p>
            <p className="food-item-price" >
                #{price}
            </p>
            <img src={Assets.ratingStar} alt='food rating' />
        </div>
      
    </div>
  )
}

 
