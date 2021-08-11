import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Home, Cart, ProductDetails } from './pages/pagesIndex';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={ Home } />
        <Route exact path="/cart" component={ Cart } />
        <Route exact path="/product-details/:id" component={ ProductDetails } />
      </Switch>
    </Router>
  );
}

export default App;
