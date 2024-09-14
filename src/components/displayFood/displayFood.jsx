import React, {useContext} from 'react';
import './displayFood.css';
import { StoreContext } from '../../storecontext/storecontext';
import { FoodItem } from '../foodItem/foodItem';


export const DisplayFood = ({category}) => {
    const {foodList} = useContext(StoreContext);
  return (
    <div className='food-display' id='food-display'>
       <h2>Top dishes near you</h2>
       <div className="food-display-list">
        {foodList.map((item, index)=>{
          {console.log(category, item.category);}
          if (category==="All" || category===item.category){
            return (
              <FoodItem 
                key={index} 
                id={item._id}
                name={item.name}
                description={item.desc}
                price={item.price}
                image={item.image}
                rating={item.rating}
              />
            )
          }
            
        })}
       </div>
    </div>
  )
}


