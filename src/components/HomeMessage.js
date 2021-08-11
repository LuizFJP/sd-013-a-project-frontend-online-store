import React from 'react';
import { Link } from 'react-router-dom';
import ListCategory from './ListCategory';
import ListProduct from './ListProduct';
import * as Api from '../services/api';
import cartImg from '../images/cart-img.svg';

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
        <div className="container-category">
          <ListCategory />
        </div>
        <div className="container-main">
          <div className="container-grid">
            <input id="search" data-testid="query-input" className="search" />
            <button
              data-testid="query-button"
              onClick={ () => { this.requestProducts(); } }
              type="submit"
              className="button-buscar"
            >
              Buscar
            </button>
            <Link to="/cart" data-testid="shopping-cart-button" className="cartImg">
              <img src={ cartImg } alt="Imagem de carrinho" />
            </Link>
          </div>
          <div className="card-grid">
            { botaoClicado ? <ListProduct produtos={ produtos } /> : msgInicial }
          </div>
        </div>
      </div>
    );
  }
}

export default HomeMessage;
