import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
// import * as api from './services/api';
import Home from './pages/Home';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={ Home } />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
