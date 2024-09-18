import React, { createContext, useState } from 'react';
import {foodList} from "../assets/assets";

export const StoreContext = createContext(null)

const StoreContextProvider = (props) =>{

    const [cartItems, setCartItems] = useState({});

    /**functionality for adding to cart */
     
    const addToCart = (itemId) =>{
        if (!cartItems[itemId]){
            setCartItems((prev)=>({...prev,[itemId]:1}))
        }else{
            setCartItems((prev)=>({...prev,[itemId]:prev[itemId] + 1}))
        }
    }

    const removeFromCart =(itemId)=>{
        setCartItems((prev) => ({...prev,[itemId]:prev[itemId] - 1}))
    }

   const cartTotalAmount =()=>{
    let totalAmount = 0;
    for(const items in cartItems){
        if(cartItems[items] > 0){
          let itemInfo = foodList.find((product)=> product._id === items);
          totalAmount += itemInfo.price * cartItems[items];
        }
     }
     return totalAmount;
   }

    const contextValue = {
       foodList,
       cartItems,
       setCartItems,
       addToCart,
       removeFromCart,
       cartTotalAmount
    }
    return (
        <StoreContext.Provider value={contextValue}>
            {props.children}
        </StoreContext.Provider>
    )
}

export default StoreContextProvider
  