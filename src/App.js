import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';
import SearchBar from './components/SearchBar';
import ShoppingCart from './components/ShoppingCart';

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route path="/shopping-cart" component={ ShoppingCart } />
          <Route exact path="/" component={ SearchBar } />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
