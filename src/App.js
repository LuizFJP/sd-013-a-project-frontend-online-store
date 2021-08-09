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
