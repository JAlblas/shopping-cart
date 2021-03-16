import React, {useState, useEffect} from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "./Home";
import Shop from "./Shop"
import Profile from "./Profile";
import Location from "./Location";
import Cart from "./Cart";

const App = () => {
  const [cardbacks, setCardbacks] = useState([]);
  const [shoppingCart, setShoppingCart] = useState([]);

  useEffect(() => {
    getCardData();
  });

  const addToCart = (id) => {
    console.log("Adding to cart!");
    console.log(id);
    let updatedCart = [...shoppingCart];

    let productId = cardbacks.find(x => x.cardBackId === id).cardBackId;
    let productImage = cardbacks.find(x => x.cardBackId === id).img;

    let productIndex = updatedCart.findIndex(x => x.id === productId);
    let productInCart = updatedCart[productIndex];

    if (productInCart) {
      productInCart.quantity++;
      updatedCart[productIndex] = productInCart;
    } else {
      updatedCart.push({id: id, img: productImage, quantity: 1});
    }

    setShoppingCart(updatedCart);
  }

  async function getCardData() {
    const response = await fetch("https://omgvamp-hearthstone-v1.p.rapidapi.com/cardbacks", {
      "method": "GET",
      "headers": {
        "x-rapidapi-key": process.env.REACT_APP_API_KEY,
        "x-rapidapi-host": "omgvamp-hearthstone-v1.p.rapidapi.com"
      }
    })
    if (response.status === 400) {
        //displayErrorMessage();
    } else {
        const cardData = await response.json();
        setCardbacks(cardData)
        //displayCurrentWeather(weatherData.current);
    }
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
              <Shop cardBacks={cardbacks} addToCart={addToCart}/>
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