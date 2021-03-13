import React from "react";
import Navigation from './Navigation'
import Footer from './Footer'

const Cart = (props) => {
  const productList = props.shoppingCart.map((product) =>
  <div className="product">
      <p>{product.name}</p>
      <p>{product.quantity}</p>
      <button>-</button>
      <button>+</button>
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