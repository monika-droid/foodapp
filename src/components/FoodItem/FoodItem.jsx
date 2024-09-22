import React, { useContext, useState } from 'react'
import './FoodItem.css';
import { assets } from '../../assets/assets';
import { StoreContext } from '../../context/storeContext';
const FoodItem = ({ id, name, price, description, image }) => {
  const {cartItem, addToCart, removeFromCart} = useContext(StoreContext);
  return (
    <div className='foodItem'>
      <div className="imageContainer">
        <img className='foodImage' src={image} alt="" />
      </div>
      <div className="itemInfo">
        <div className="ratingandname">
          <p>{name}</p>
          <img src={assets.rating_starts} alt="" />
        </div>
        <p className='description'>{description}</p>
        <div className='priceandicon'>
          <p className='price'>${price}</p>
          {!cartItem ? 
          <button onClick={()=>addToCart(id)}>Add</button> : 
          <button>
          <div className='iconalignment'> <span class="material-symbols-outlined"  onClick={()=>removeFromCart(id)}> remove </span> {cartItem[id]}<span class="material-symbols-outlined"  onClick={()=>addToCart(id)}> add</span></div>
          </button>
          }
        </div>
      </div>
    </div>
  )
}

export default FoodItem