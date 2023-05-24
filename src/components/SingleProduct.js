import React, { useContext } from "react";
import "../Styles/header.css";
import { CartProps } from "../Context";

const SingleProduct = ({ prod }) => {
const {cart, setCart} = useContext(CartProps)

  const handleAddCart = () => {
    setCart((prevCart) => {
      return [...prevCart, prod];
    });
  };

  const handleRemoveCart = () => {
    setCart(cart.filter((c)=> c.userId !== prod.userId))
  };
  return (
    <div className="product">
      <div class="card">
        <img src={prod.avatar} class="card-img-top" alt="..." />
        <div class="card-body">
          <h5 class="card-title">{prod.productName}</h5>
          <p class="card-title">
            <span> &#8377;</span>
            {prod.price.substring(0, 3)}
          </p>
          {cart.includes(prod) ? 
            <button
              className="btn btn-danger"
              style={{ marginLeft: "10px" }}
              onClick={handleRemoveCart}
            >
              remove from cart
            </button>
           : 
            <button className="btn btn-primary" onClick={handleAddCart}>
              add to cart
            </button>
          }
        </div>
      </div>
    </div>
  );
};

export default SingleProduct;
