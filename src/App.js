import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Main from './pages/Main';
import Cart from './pages/Cart';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={ Main } />
        <Route exact path="/Cart" component={ Cart } />
      </Switch>
    </Router>
  );
}

export default App;
