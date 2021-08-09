import React from 'react';
import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { SearchInput, Categories, ShoppingCart } from './components';

function App() {
  return (
    <main>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={ SearchInput } />
          <Route path="/mycart" component={ ShoppingCart } />
        </Switch>
      </BrowserRouter>
      <Categories />
    </main>
  );
}
export default App;
