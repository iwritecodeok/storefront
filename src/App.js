import React from 'react';
import './Styles/App.scss';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import NavBar from './Components/Nav'
function App() {
  return (
    <Router>
    <div className="app">
    <Switch>
      <Route path="/checkout">
        <h1>Checkout</h1>
      </Route>
      <Route path="/login">
        <h1>Login</h1>
      </Route>
      <Route path="/">
        <NavBar/>
        <h1>Home Page</h1>
      </Route>
    </Switch>
    </div>
    </Router>
  );
}

export default App;