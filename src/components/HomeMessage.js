import React from 'react';
import { Link } from 'react-router-dom';
import ListCategory from './ListCategory';
import ListProduct from './ListProduct';
import * as Api from '../services/api';

class HomeMessage extends React.Component {
  constructor() {
    super();
    this.state = {
      produtos: [],
      botaoClicado: false,
    };
  }

  async requestProducts() {
    const search = document.getElementById('search').value;
    const api = (await Api.getProductsFromCategoryAndQuery('', search));
    this.setState({
      produtos: api.results,
      botaoClicado: true,
    });
  }

  render() {
    const { produtos, botaoClicado } = this.state;
    const msgInicial = (
      <p data-testid="home-initial-message">
        Digite algum termo de pesquisa ou escolha uma categoria.
      </p>
    );
    return (
      <div className="App">
        <label htmlFor="search">
          <input id="search" data-testid="query-input" />
        </label>
        <button
          data-testid="query-button"
          onClick={ () => { this.requestProducts(); } }
          type="submit"
        >
          Buscar
        </button>
        { botaoClicado ? <ListProduct produtos={ produtos } /> : msgInicial }
        <Link to="/cart" data-testid="shopping-cart-button">Cart</Link>
        <ListCategory />
      </div>
    );
  }
}

export default HomeMessage;
