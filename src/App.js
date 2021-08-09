import React from 'react';
import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import SearchInput from './components/SearchInput';

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
