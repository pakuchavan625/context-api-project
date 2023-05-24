import React, { useContext, useEffect, useState } from 'react'
import { CartProps } from '../Context'
import "../Styles/header.css"
import SingleProduct from './SingleProduct'

const Cart = () => {
  const {cart} =useContext(CartProps)
  const [total, setTotal] = useState(0)
  useEffect(()=>{
    setTotal(cart.reduce((a,b)=> a + Number(b.price), 0))
  },[cart])
  return (
    <div>
        <h1 style={{textAlign:'center'}}>My cart details</h1>
        <span style={{fontSize: '30px'}}>My Cart</span>
        <div>Rs.{total}</div>
        <div className="product-container">
            {cart.map((item)=>{
               return  <SingleProduct prod={item}  key={item.userId}/>
            })}
        </div>
    </div>
  )
}

export default Cart