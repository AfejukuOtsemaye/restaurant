import React from 'react'
import './footer.css';
import { Assets } from '../../assets/assets';

export const Footer = () => {
  return (
    <div className='footer' id='footer'>
      <div className='footerContent'>
        <div className="footerLeft">
          <img src={Assets.logo1} alt="business-logo" />
          <p>
            Our dishes are prepared with so much love for a special one like you, our chefs are 
            professionals and we bring you an array of diverse delectable and palatable dishes.
            <div className="footerIcons">
                <img src={Assets.linkedIn} alt="follow us on linkedIn" />
                <img src={Assets.instagram} alt="follow us on instagram" />
                <img src={Assets.facebook} alt="follow us on facebook" />
            </div>
          </p>
        </div>
        <div className="footerCenter">
            <h2>COMPANY</h2>
            <ul>
                <li>Home</li>
                <li>About Us</li>
                <li>Delivery</li>
                <li>Privacy Policy</li>
            </ul>
            
        </div>
        <div className="footerRight">
            <h2>GET IN TOUCH</h2>
            <ul>
                <li>+234-70-656-099-3</li>
                <li>Contact@restaurent.com</li>
            </ul>
        </div>
      </div>
      <p className="footerCopyright">
        Copyright 2024 @ Restaurent.com. All Right Reserved
      </p>
    </div>
  )
}

 
