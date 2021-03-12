import React, { useState } from 'react';
import Navigation from './Navigation'
import Footer from './Footer'

import './Shop.css';

const Shop = (props) => {
    const productList = props.products.map((product) =>
        <div className="product">
            <p>{product}</p>
            <img src="https://i.picsum.photos/id/795/200/200.jpg?hmac=frCAqjE9buwwg1NjgwTe6Ef_WWIJOl5h2c6-TFjnlA4"></img>
            <button>Add to cart</button>
        </div>
    );
    return (
    <div>
        <Navigation />
        <div id="content">
            <h1>Shop</h1>
            <div id="products">
                {productList}
            </div>
        </div>
        <Footer />
    </div>
  );
};

export default Shop;