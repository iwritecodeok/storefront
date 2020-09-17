import React, { useEffect } from "react";
import "./Styles/App.scss";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import NavBar from "./Components/Nav";
import Home from "./Components/Home";
import Checkout from "./Components/Checkout";
import Login from "./Components/Login";
import Registration from "./Components/Registration";
import Payment from "./Components/Payment.js";
import { useStateValue } from "./StateProvider";
import { auth } from "./firebase";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";

const promise = loadStripe(
  "pk_test_51HSU5zAcE3XGJuwah8386x3PRoDroQy9E1g6WdvgQMCQcn887jfiQO6ffVU97KCOlvkh0fB7mPvhdxM1mBlMQTvA00zIBK8Q7C"
);
function App() {
  const [{ user }, dispatch] = useStateValue();

  // use Effect code which runs based on a given condition
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        //logged in
        dispatch({
          type: "SET_USER",
          user: authUser,
        });
      } else {
        //logged out
        dispatch({
          type: "SET_USER",
          user: null,
        });
      }
    });

    return () => {
      //any cleanup here
      unsubscribe();
    };
  }, []);

  console.log("USER HERE >>>>>>", user);

  return (
    <Router>
      <div className="app">
        <Switch>
          <Route path="/payment">
            <NavBar />
            <Elements stripe={promise}>
              <Payment />
            </Elements>
          </Route>
          <Route path="/checkout">
            <NavBar />
            <Checkout />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/registration">
            <Registration />
          </Route>
          <Route path="/">
            <NavBar />
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
