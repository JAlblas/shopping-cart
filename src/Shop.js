import React, { useState } from 'react';
import Navigation from './Navigation'

import './Shop.css';

const Shop = () => {
    const [items, setItems] = useState(["shoes", "cartoons", "dog", "cat"]);
    return (
    <div>
        <Navigation />

        <h1>Hello from Shop</h1>
        {items.map((item) =>
            <div className="item">{item}</div>
        )}
        
    </div>
  );
};

export default Shop;