import React, { createContext, useState, useEffect } from 'react';
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

    useEffect(()=>{
        console.log(cartItems);
    }, [cartItems])

    const contextValue = {
       foodList,
       cartItems,
       setCartItems,
       addToCart,
       removeFromCart
    }
    return (
        <StoreContext.Provider value={contextValue}>
            {props.children}
        </StoreContext.Provider>
    )
}

export default StoreContextProvider
  