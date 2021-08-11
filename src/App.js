import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import './App.css';
import Home from './pages/Home';
import Cart from './pages/Cart';
// import Details from './pages/Details';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={ Home } />
        <Route path="/Cart" component={ Cart } />
        {/* <Route path="/details" component={ Details } /> */}
      </Switch>
    </BrowserRouter>
  );
}

export default App;
