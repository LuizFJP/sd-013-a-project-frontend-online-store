import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import ProductList from './components/ProductList';
import './App.css';

import Category from './components/Category';
import Cart from './components/Cart';

function App() {
  return (
    <div className="main">
      <BrowserRouter>
        <section className="aside-category"><Category /></section>
        <section className="main-content">
          <Switch>
            <Route exact path="/" component={ ProductList } />
            <Route className="cart" exact path="/cart" component={ Cart } />
          </Switch>
        </section>
      </BrowserRouter>
    </div>
  );
}

export default App;
