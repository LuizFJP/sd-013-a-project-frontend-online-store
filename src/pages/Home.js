import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { getProductsFromCategoryAndQuery } from '../services/api';
import Categorias from './Categorias';
import Produtos from './Produtos';

class Home extends Component {
  constructor() {
    super();

    this.state = {
      categoriaId: '',
      termoBusca: '',
      produtos: [],
    };
  }

  executaBusca = async () => {
    const { categoriaId, termoBusca } = this.state;
    const produtos = await getProductsFromCategoryAndQuery(categoriaId, termoBusca);
    this.setState({ produtos: produtos.results });
  }

  atualizaTermo = ({ target }) => {
    const { value } = target;
    this.setState({ termoBusca: value });
  }

  atualizaCategoriaId = ({ target }) => {
    const { id } = target;
    this.setState({ categoriaId: id }, () => {
      this.executaBusca();
    });
  }

  render() {
    const { produtos } = this.state;
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
          <Categorias atualizaCategoriaId={ this.atualizaCategoriaId } />
          <Produtos produtos={ produtos } />
        </div>
      </main>
    );
  }
}

export default Home;
