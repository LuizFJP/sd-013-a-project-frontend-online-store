import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import CarShop from './pages/CarShop';
import Home from './pages/Home';
import ListByCategory from './pages/ListByCategory';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={ Home } />
        <Route
          exact
          path="/:category"
          render={ (props) => <ListByCategory { ...props } /> }
        />
        <Route exact path="/carshop" component={ CarShop } />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
