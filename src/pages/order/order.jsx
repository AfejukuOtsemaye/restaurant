import React, { useContext } from 'react'
import './order.css';
import { StoreContext } from '../../storecontext/storecontext';

export const Order = () => {

  const {cartTotalAmount} = useContext(StoreContext);
  return (
    <form className='place-order'>
      <div className="placeOrder-left">
        <p className='title'>
          Delivery Information
        </p>
        <div className="multi-fields">
          <input type="text" placeholder='First Name'/>
          <input type="text" placeholder='Last Name' />
        </div>
        <input type="email" placeholder='Email Address' />
        <input type="text" placeholder='Street'/>
        <div className="multi-fields">
          <input type="text" placeholder='City'/>
          <input type="text" placeholder='State' />
        </div>
        <div className="multi-fields">
          <input type="text" placeholder='Zip Code'/>
          <input type="text" placeholder='Country' />
        </div>
        <input type="phone" placeholder='Phone Number'/>
      </div>
      <div className="placeOrder-right">
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
        <button onClick={()=>{}}>PROCEED TO PAYMENT</button>
      </div>

      </div>
    </form>
  )
}


