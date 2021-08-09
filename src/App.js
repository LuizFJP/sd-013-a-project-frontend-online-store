import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './Pages/Home';
import ShoppingCart from './Pages/ShoppingCart';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Switch>
          <Route
            exact
            path="/"
            component={ Home }
          />
          <Route
            exact
            path="/cart"
            component={ ShoppingCart }
          />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
