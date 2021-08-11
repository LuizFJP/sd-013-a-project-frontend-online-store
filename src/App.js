import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Carrinho from './pages/Carrinho';

import Home from './pages/Home';
import ProdutoDetalhado from './pages/ProdutoDetalhado';

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      carrinho: [],
      produtoClicado: '',
    };
  }

  addAoCarrinho = (produto) => {
    this.setState(({ carrinho }) => ({ carrinho: [...carrinho, produto] }));
  };

  guardaProdutoClicado = (produto) => {
    this.setState({ produtoClicado: produto });
  }

  renderHome = () => (
    <Home
      gestorDoCarrinho={ this.addAoCarrinho }
      guardaProdutoClicado={ this.guardaProdutoClicado }
    />
  );

  render() {
    const { carrinho, produtoClicado } = this.state;

    return (
      <Router>
        <Switch>
          <Route
            exact
            path="/"
            render={ () => this.renderHome() }
          />
          <Route path="/carrinho" render={ () => <Carrinho produtos={ carrinho } /> } />
          <Route
            path="/produto/:id"
            render={ () => <ProdutoDetalhado produto={ produtoClicado } /> }
          />
        </Switch>
      </Router>
    );
  }
}

export default App;
