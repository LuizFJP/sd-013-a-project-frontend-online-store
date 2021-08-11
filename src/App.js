import React from 'react';
import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { SearchInput, ShoppingCart } from './components';
import { Main, ProductDetails } from './pages';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={ Main } />
        <Route path="/mycart" component={ ShoppingCart } />
        <Route path="/mycart" component={ SearchInput } />
        <Route path="/product/:id" component={ ProductDetails } />
      </Switch>
    </BrowserRouter>
  );
}
export default App;
