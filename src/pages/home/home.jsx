import React, { useState } from 'react'
import './home.css';
import Header from '../../components/Header/Header';
import MenuPage from '../../components/menuPage/menuPage';
import {DisplayFood}   from '../../components/displayFood/displayFood';
import AppDownload from '../../components/appDownload/appDownload';

export const Home = () => {

  const [foodCategory, setFoodCategory] = useState("All");
  return (
    <div className='Home'>
      <Header/> 
      <MenuPage category={foodCategory} setCategory={setFoodCategory}/> 
      <DisplayFood category={foodCategory}/>
      <AppDownload />
    </div>
  )
}


