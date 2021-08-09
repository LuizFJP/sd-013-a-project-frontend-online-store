import React from 'react';
import './App.css';
import {
  BrowserRouter,
  Switch,
  Route,
} from 'react-router-dom';
import Index from './components/Index';
import Cart from './components/Cart';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/cart">
          <Cart />
        </Route>
        <Route exact path="/">
          <Index />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
