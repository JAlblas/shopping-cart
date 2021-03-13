import React, {useState} from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "./Home";
import Shop from "./Shop"
import Profile from "./Profile";
import Location from "./Location";
import Cart from "./Cart";

const App = () => {
  const [products, setProducts] = useState([
    {id: 0, name: "apple"}, {id: 1, name: "pear"}, {id: 2, name: "mango"}, {id: 3, name: "banana"}, {id: 4, name: "fennikel"}
  ]);
  const [shoppingCart, setShoppingCart] = useState([{id: 0, name: "apple", quantity: 5}]);

  const addToCart = (id) => {
    console.log("Adding to cart!");

    console.log(products.find(x => x.id === id).name);
    let newItem = {};

    //const newCart = [...shoppingCart, newItem];

    //setShoppingCart(newCart);
  }

  return (
    <div id="main">
    <BrowserRouter>
      <Switch>
            <Route exact path="/">
              <Home/>
            </Route>
            <Route exact path="/profile">
              <Profile/>
            </Route>
            <Route exact path="/location">
              <Location/>
            </Route>
            <Route exact path="/shop">
              <Shop products={products} addToCart={addToCart}/>
            </Route>
            <Route exact path="/cart">
                <Cart shoppingCart={shoppingCart}/>
            </Route>
      </Switch>
    </BrowserRouter>
    </div>
  );
};

export default App;