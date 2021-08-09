import React from 'react';
import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import HomeMessage from './components/HomeMessage';
import Cart from './components/Cart';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/cart" component={ Cart } />
        <Route exact path="/" component={ HomeMessage } />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
