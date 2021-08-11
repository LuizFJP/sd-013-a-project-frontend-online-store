import React from 'react';
import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import HomeMessage from './components/HomeMessage';
import Cart from './components/Cart';
import ProductDetails from './components/ProductDetails';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/cart" component={ Cart } />
        <Route exact path="/" component={ HomeMessage } />
        <Route path="/productdetails/:id" component={ ProductDetails } />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
