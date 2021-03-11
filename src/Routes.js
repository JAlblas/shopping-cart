import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import App from "./App";
import Shop from "./Shop"
import Profile from "./Profile";
import Location from "./Location";
import Cart from "./Cart";

const Routes = () => {
  return (
    <div id="main">
    <BrowserRouter>
      <Switch>
            <Route exact path="/" component={App} />
            <Route exact path="/shop" component={Shop} />
            <Route exact path="/profile" component={Profile} />
            <Route exact path="/location" component={Location} />
            <Route exact path="/cart" component={Cart} />
      </Switch>
    </BrowserRouter>
    </div>
  );
};

export default Routes;