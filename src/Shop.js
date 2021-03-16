import React, { useState } from 'react';
import Navigation from './Navigation'
import Footer from './Footer'

import './Shop.css';

const Shop = (props) => {
    const cardList = props.cardBacks.map((cardBack) =>
        <div className="product">
            <p>{cardBack.name}</p>
            <img src={cardBack.img}></img>
            <button onClick={() => props.addToCart(cardBack.cardBackId)}>Add to cart</button>
        </div>
    );
    return (
    <div>
        <Navigation />
        <div id="content">
            <h1>Shop</h1>
            <div id="products">
                {cardList}
            </div>
        </div>
        <Footer />
    </div>
  );
};

export default Shop;