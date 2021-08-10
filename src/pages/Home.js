import React, { Component } from 'react';

import { Link } from 'react-router-dom';
import { getProductsFromCategoryAndQuery } from '../services/api';
import Categorias from './Categorias';
import Produtos from './Produtos';

class Home extends Component {
  constructor() {
    super();

    this.state = {
      termoBusca: '',
      produtos: [],
    };
  }

  executaBusca = async () => {
    const { termoBusca } = this.state;

    const produtos = await getProductsFromCategoryAndQuery(null, termoBusca);
    this.setState({ produtos: produtos.results });
  }

  atualizaTermo = ({ target }) => {
    const { value } = target;
    this.setState({ termoBusca: value });
  }

  render() {
    const { produtos } = this.state;
    const { gestorDoCarrinho } = this.props;

    return (
      <main>
        <input
          type="text"
          className="campo-de-busca"
          data-testid="query-input"
          onChange={ this.atualizaTermo }
        />
        <button
          type="button"
          onClick={ this.executaBusca }
          data-testid="query-button"
        >
          Buscar
        </button>
        <Link to="/carrinho" data-testid="shopping-cart-button">Carrinho</Link>
        <p
          data-testid="home-initial-message"
        >
          Digite algum termo de pesquisa ou escolha uma categoria.
        </p>
        <div>
          <Categorias />
          <Produtos produtos={ produtos } gestorDoCarrinho={ gestorDoCarrinho }  />
        </div>
      </main>
    );
  }
}

export default Home;
