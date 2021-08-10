import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import ShopCart from './pages/ShopCart';
import Products from './pages/Products';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route exact path="/" render={ () => <Home /> } />
          <Route path="/cart" render={ () => <ShopCart /> } />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
