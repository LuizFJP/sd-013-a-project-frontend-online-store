import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';
import SearchBar from './components/SearchBar';

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route path="/" component={ SearchBar } />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
