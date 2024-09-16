import React, {useState} from 'react';
import './navbar.css';
import { Assets } from '../../assets/assets';
import { Link } from 'react-router-dom';

export const Navbar = ({setLogin}) => {

  const [menu, setMenu] = useState("home")
  return (
    <div className='nav'>
      <img src={Assets.logo1} alt='business logo' className='logo'/>
      <ul className="nav-menu">
        <Link to='/' onClick={()=>setMenu("home")} className={menu==="home" ? "active" : ""}> Home</Link>
        <a href='#foodMenu' onClick={()=>setMenu("menu")} className={menu==="menu" ? "active" : ""}> Menu</a>
        <a href='#App-Download' onClick={()=>setMenu("mobile-app")} className={menu==="mobile-app" ? "active" : ""}> Mobile-App</a>
        <a href='#footer' onClick={()=>setMenu("contact-us")} className={menu==="contact-us" ? "active" : ""}> Contact-Us</a>
      </ul>
      <div className="nav-right">
        <img src={Assets.searchIcon} alt="search food" />
        <div className="nav-search-icon">
          <img src={Assets.cart} alt="cart" />
          <div className='dot'></div>
        </div>
        <button onClick={()=>setLogin(true)}>Sign In</button>
      </div>
    </div>
  )
}


