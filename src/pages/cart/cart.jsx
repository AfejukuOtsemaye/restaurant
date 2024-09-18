import React, { useContext } from 'react'
import './cart.css';
import { StoreContext } from '../../storecontext/storecontext';
import { useNavigate } from 'react-router-dom';

export const Cart = () => {
  const {cartItems, foodList, removeFromCart, cartTotalAmount} = useContext(StoreContext);

  const navigate =useNavigate();
  return (
    <>
    <div className='cart'>
      <div className="cart-items">
        <div className="cart-items-title">
          <p> Items </p>
          <p> Title </p>
          <p> Price  </p>
          <p> Quantity  </p>
          <p> Total  </p>
          <p> Remove</p>
        </div>
        <hr></hr>
      </div>
      {foodList.map((item,index)=>{
        if(cartItems[item._id] > 0){
          return(
            <div>
              <div className="cart-items-title cart-items-item">
              <img src={item.image} alt="A plate of yummy" />
              <p>{item.name}</p>
              <p>#{item.price}</p>
              <p>{cartItems[item._id]}</p>
              <p>#{item.price  * cartItems[item._id]}</p>
              <p onClick={()=>removeFromCart(item._id)}  className='remove'>X</p>
              </div>
              <hr />
            </div>
          )
        }
      })}
    </div>
    <div className='cart-bottom'>
      <div className="cart-total">
        <h2>Cart Total</h2>
        <div>
          <div className="cart-total-details">
            <p>SubTotal</p>
            <p>#{ cartTotalAmount()}</p>
          </div>
          <hr />
          <div className="cart-total-details">
            <p>Delivery Fee</p>
            <p>#{cartTotalAmount() === 0 ? 0 : 500}</p>
          </div>
          <hr />
          <div className="cart-total-details">
            <b>Total</b>
            <b> #{ cartTotalAmount() === 0 ? 0 : cartTotalAmount() + 500}</b>
          </div>
        </div>
        <button onClick={()=>navigate('/order')}>PROCEED TO CHECK OUT</button>
      </div>
      <div className="cart-promoCode">
        <p>
          Enter your promo code here
        </p>
        <div className="cart-promoCode-input">
          <input type="text" placeholder='promo code'/>
          <button>SUBMIT</button>
        </div>
      </div>
    </div>
    </>
  )
}


