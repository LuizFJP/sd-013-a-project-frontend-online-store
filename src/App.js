import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import ShoppingCart from './pages/ShoppingCart';
import './App.css';
import ProductDetail from './components/ProductDetail';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Switch>
          <Route exact path="/" component={ Home } />
          <Route path="/shopping-cart" component={ ShoppingCart } />
          <Route
            path="/details/:id"
            render={ (props) => (<ProductDetail { ...props } />) }
          />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
