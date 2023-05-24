import React, { useContext } from 'react'
import '../Styles/header.css'
import { Link } from "react-router-dom";
import { CartProps } from '../Context';

const Header = () => {
    const {cart} = useContext(CartProps)
  return (
    <div>
        <h1>React context api project</h1>
        <ul className='nav'>
            <li>
                <Link to='/'>Home</Link>
            </li>
            <li>
            <Link to='/cart'>
            Cart <span style={{color:"red"}}>({cart.length})</span>
            </Link>
            </li>
        </ul>
    </div>
  )
}

export default Header