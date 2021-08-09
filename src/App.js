import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import ShopCart from './pages/ShopCart';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route exact path="/" render={ () => <Home /> } />
          <Route exact path="/cart" render={ () => <ShopCart /> } />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
