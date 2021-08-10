import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import './App.css';
import Home from './Components/Home';
import ShoppingCart from './Components/ShoppingCart';
// import SearchBar from './Components/SearchBar';
// import * as api from './services/api';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Route exact path="/" component={ Home } />
        <Route path="/cart" component={ ShoppingCart } />
      </BrowserRouter>
    </div>
  );
}

export default App;
