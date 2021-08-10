import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Carrinho from './pages/Carrinho';

import Home from './pages/Home';

class App extends React.Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={ Home } />
          <Route path="/carrinho" component={ Carrinho } />
        </Switch>
      </Router>
    );
  }
}

export default App;
