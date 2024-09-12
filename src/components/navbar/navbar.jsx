import React, {useState} from 'react';
import './navbar.css';
import { Assets } from '../../assets/assets';

export const Navbar = () => {

  const [menu, setMenu] = useState("home")
  return (
    <div className='nav'>
      <img src={Assets.logo1} alt='business logo' className='logo'/>
      <ul className="nav-menu">
        <li onClick={()=>setMenu("home")} className={menu==="home" ? "active" : ""}> Home</li>
        <li onClick={()=>setMenu("menu")} className={menu==="menu" ? "active" : ""}> Menu</li>
        <li onClick={()=>setMenu("mobile-app")} className={menu==="mobile-app" ? "active" : ""}> Mobile-App</li>
        <li onClick={()=>setMenu("contact-us")} className={menu==="contact-us" ? "active" : ""}> Contact-Us</li>
      </ul>
      <div className="nav-right">
        <img src={Assets.searchIcon} alt="search food" />
        <div className="nav-search-icon">
          <img src={Assets.cart} alt="cart" />
          <div className='dot'></div>
        </div>
        <button >Sign In</button>
      </div>
    </div>
  )
}


