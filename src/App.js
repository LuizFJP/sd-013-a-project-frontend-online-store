import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import ShopCart from './pages/ShopCart';
import ProductDetails from './pages/ProductDetails';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Route exact path="/" render={ () => <Home /> } />
        <Route exact path="/cart" render={ () => <ShopCart /> } />
        <Route exact path="/productdata/:id" render={ (props) => <ProductDetails {...props} /> } />
      </BrowserRouter>
    </div>
  );
}

export default App;
