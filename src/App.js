import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import ShoppingCart from './components/ShoppingCart';
import Details from './Details';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route path="/ShoppingCart" component={ ShoppingCart } />
          <Route path="/Details/:id" component={ Details } />
          <Route exact path="/" component={ Home } />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
