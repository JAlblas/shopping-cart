import React, {useState} from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "./Home";
import Shop from "./Shop"
import Profile from "./Profile";
import Location from "./Location";
import Cart from "./Cart";

const App = () => {
  const [products, setProducts] = useState([
    "apple", "pear", "mango", "banana", "fennikel"
  ]);
  const [shoppingCart, setShoppingCart] = useState([]);

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
              <Shop products={products}/>
            </Route>
            <Route exact path="/cart">
                <Cart/>
            </Route>
      </Switch>
    </BrowserRouter>
    </div>
  );
};

export default App;