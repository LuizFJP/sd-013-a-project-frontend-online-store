import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Category from '../components/Category';
// import { getProductsFromCategoryAndQuery } from '../services/api';

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputValue: '',
      categoria: '',
      noSearch: true,
      products: [],
      inCart: 0,
    };
  }

  handleChangeInput = ({ target }) => {
    const { value } = target;
    this.setState({
      inputValue: value,
    });
  }

  requestProducts = async () => {
    const { inputValue, categoria } = this.state;
    if (inputValue) {
      this.setState({
        products: [],
      });
      const request = await api.getProductsFromCategoryAndQuery(categoria, inputValue);
      const produtos = request.results;
      this.setState({
        products: [...produtos],
        noSearch: false,
      });
    }
  }

  render() {
    return (
      <div>
        <input
          data-testid="query-input"
          type="text"
          name="product-search"
          onChange={ this.handleChangeInput }
          value={ inputValue }
        />
        <button
          data-testid="query-button"
          onClick={ this.requestProducts }
          type="button"
        >
          Buscar
        </button>
        <p data-testid="home-initial-message">
          Digite algum termo de pesquisa ou escolha uma categoria.
        </p>

        <Link to="/Cart" data-testid="shopping-cart-button">Carrinho de Compras</Link>
        <Category />
      </div>
    );
  }
}

export default Main;
