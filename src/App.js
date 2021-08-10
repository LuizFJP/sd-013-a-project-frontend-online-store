import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import SearchBar from './pages/SearchBar';
import './App.css';
import ShoppingCard from './pages/ShoppingCard';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={ SearchBar } />
          <Route path="/shoppingcard" component={ ShoppingCard } />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
