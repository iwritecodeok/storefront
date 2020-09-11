import React from 'react';
import './Styles/App.scss';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import NavBar from './Components/Nav'
import Home from './Components/Home'
function App() {
  return (
    <Router>
    <div className="app">
    <Switch>
      <Route path="/checkout">
        <NavBar/>
        <h1>Checkout</h1>
      </Route>
      <Route path="/login">
        <h1>Login</h1>
      </Route>
      <Route path="/">
        <NavBar/>
        <Home/>
      </Route>
    </Switch>
    </div>
    </Router>
  );
}

export default App;
