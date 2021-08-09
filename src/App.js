import React from 'react';
import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import HomeMessage from './components/HomeMessage';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={ HomeMessage } />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
