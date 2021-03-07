import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import App from "./App";
import Shop from "./Shop"
import Profile from "./Profile";
import Location from "./Location";

const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={App} />
        <Route exact path="/shop" component={Shop} />
        <Route exact path="/profile" component={Profile} />
        <Route exact path="/location" component={Location} />
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;