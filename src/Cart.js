import React from "react";
import Navigation from './Navigation'
import Footer from './Footer'

const Cart = (props) => {
  console.log(props);
  const productList = props.shoppingCart.map((cardBack) =>
  <div className="product-cart">
      <p>{cardBack.name}</p>
      <p>{cardBack.quantity}</p>
      <img src={cardBack.img}></img>
      <button onClick={() => props.removeFromCart(cardBack.id)}>-</button>
      <button onClick={() => props.addToCart(cardBack.id)}>+</button>
  </div>
);
  return (
    <div>
        <Navigation />
        <div id="content">
            <h1>Shopping Cart</h1>
            <p>{props.shoppingCart.length > 0 ? productList : "Shopping cart empty" }</p>
        </div>
        <Footer />
    </div>
  );
};

export default Cart;