import React from 'react';
import './App.css';
import { SearchInput } from './components';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={ SearchInput } />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
