<<<<<<< HEAD
import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Link,
  Route,
} from 'react-router-dom';

import Home from './pages/Home';
import ShoppingCart from './pages/ShoppingCart';

export default class App extends Component {
  render() {
    return (
      <Router>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/shopping" data-testid="shopping-cart-button">Cart</Link></li>
        </ul>
=======
import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import ShoppingCart from './components/ShoppingCart';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route path="/ShoppingCart" component={ShoppingCart} />
          <Route exact path="/" component={Home} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}
>>>>>>> main-group-15-reset

        <Switch>
          <Route
            exact
            path="/shopping"
            component={ ShoppingCart }
          />

          <Route
            exact
            path="/"
            component={ Home }
          />
        </Switch>
      </Router>
    );
  }
}
