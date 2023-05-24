import React, { createContext, useState } from 'react'

export const CartProps = createContext()

const Context = ({children}) => {
    const [cart, setCart] = useState([])
  return (
    <CartProps.Provider value={{cart, setCart}}>
        {children}
    </CartProps.Provider>
  )
}

export default Context