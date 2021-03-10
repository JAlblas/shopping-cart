import React, { useState } from 'react';
import Navigation from './Navigation'

import './Shop.css';

const Shop = () => {
    const [items, setItems] = useState(["shoes", "cartoons", "dog", "cat"]);
    const itemList = items.map((item) =>
        <div className="item">{item}</div>
    );
    return (
    <div>
        <Navigation />

        <h1>Hello from Shop</h1>
        {itemList}
        
    </div>
  );
};

export default Shop;