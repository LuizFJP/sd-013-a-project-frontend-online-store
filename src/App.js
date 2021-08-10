import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Carrinho from './pages/Carrinho';

import Home from './pages/Home';

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      carrinho: [],
    };
  }

  addAoCarrinho = (produto) => {
    this.setState((state) => ({ carrinho: [...state.carrinho, produto] }));
  };

  render() {
    const { carrinho } = this.state;

    return (
      <Router>
        <Switch>
          <Route
            exact
            path="/"
            render={ () => <Home gestorDoCarrinho={ this.addAoCarrinho } /> }
          />
          <Route path="/carrinho" render={ () => <Carrinho produtos={ carrinho } /> } />
        </Switch>
      </Router>
    );
  }
}

export default App;
