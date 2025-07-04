import React, { createContext, useContext, useState } from 'react'
const ContextProduct = createContext();


const ProductContext = ({ children }) => {
  const [cart, setCart] = useState([])
  
  const filteredCart = cart?.reduce((acc, cur) => {
    const key = cur.id;

    if (!acc[key]) {
        acc[key] = { ...cur, quantity: 1 };
    } else {
        acc[key].quantity += 1;
    }

    return acc;
}, []);
//  console.log("filtercart:",cart)

  return (

    <ContextProduct.Provider
      value={{
        cart,
        setCart,
        filteredCart
      }}>
      {children}
    </ContextProduct.Provider>

  )
}
export const useProduct = () => useContext(ContextProduct);

export default ProductContext