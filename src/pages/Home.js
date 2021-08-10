import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import * as api from '../services/api';
import ProductCard from '../components/ProductCard';
import CategoriesFilter from '../components/CategoriesFilter';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputValue: '',
      categoria: '',
      noSearch: true,
      products: [],
      // inCart: 0,
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
      const produtos = await request.results;
      this.setState({
        products: [...produtos],
        noSearch: false,
      });
    }
  }

  fetchCategory = async (value) => {
    if (value) {
      const requisicao = await api.getProductsFromCategoryAndQuery(value, false);
      const produtos = await requisicao.results;
      this.setState({
        products: [...produtos],
      }, () => this.setState({
        noSearch: false,
      }));
    }
  }

  handleChangeCategory = ({ target }) => {
    const { value } = target;
    this.setState({
      categoria: value,
    }, () => this.fetchCategory(value));
  }

  render() {
    const { inputValue, noSearch, products } = this.state;

    const showProducts = (
      products.map((product) => <ProductCard key={ product.id } product={ product } />)
    );

    const facaUmaBusca = (
      <p data-testid="home-initial-message">
        Digite algum termo de pesquisa ou escolha uma categoria.
      </p>
    );

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
        { noSearch ? facaUmaBusca : showProducts }
        <Link to="/Cart" data-testid="shopping-cart-button">Carrinho de Compras</Link>
        <CategoriesFilter onChange={ this.handleChangeCategory } />
      </div>
    );
  }
}

export default Home;
