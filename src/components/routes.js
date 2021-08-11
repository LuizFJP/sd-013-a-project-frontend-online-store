import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Home, ShoppingCart, Details } from './index';

class Routes extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={ Home } />
          <Route path="/shoppingcart" component={ ShoppingCart } />
          <Route path="/Details" component={ Details } />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default Routes;
