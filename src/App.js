import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import CarShop from './pages/CarShop';
import Home from './pages/Home';
import ProductDetails from './pages/ProductDetails';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={ Home } />
        <Route exact path="/carshop" component={ CarShop } />
        <Route
          exact
          path="/product/:id"
        >
          { (props) => <ProductDetails { ...props } /> }
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
