import React from 'react';
import {Navbar} from './components/navbar/navbar';
import { Route, Routes } from 'react-router-dom';
import {Home} from './pages/home/home';
import {Cart} from './pages/cart/cart';
import {Order} from './pages/order/order';




function App() {
  return (
    <div className="App">
     <Navbar />
     <Routes>
      <Route path='/' element={<Home/>}></Route>
      <Route path='/cart' element={<Cart/>}></Route>
      <Route path='/order' element={<Order/>}></Route>
     </Routes>
    </div>
  );
}

export default App;
