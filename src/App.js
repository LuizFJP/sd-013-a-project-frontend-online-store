import React from 'react';
import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { SearchInput, ShoppingCart } from './components';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={ SearchInput } />
        <Route path="/mycart" component={ ShoppingCart } />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
