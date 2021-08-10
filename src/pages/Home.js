import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import CardsList from '../components/CardsList';
import Categories from '../components/Categories';
import * as api from '../services/api';

class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      searchField: '',
      filteredProducts: [],
      searchIsCalled: false,
    };
    this.handleChange = this.handleChange.bind(this);
    this.fetchProducts = this.fetchProducts.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  handleChange(event) {
    const { target: { name, value } } = event;

    this.setState({
      [name]: value,
    });
  }

  handleClick() {
    this.fetchProducts();

    this.setState({
      searchIsCalled: true,
    });
  }

  async fetchProducts() {
    const { searchField } = this.state;
    const { results } = await api.getProductsFromCategoryAndQuery('', searchField);

    this.setState({
      filteredProducts: results,
    });
  }

  render() {
    const { filteredProducts, searchIsCalled } = this.state;
    return (
      <>
        <header>
          <input
            className="searchField"
            type="text"
            name="searchField"
            id="searchField"
            placeholder="Digite aqui"
            data-testid="query-input"
            onChange={ this.handleChange }
          />
          <button
            type="submit"
            data-testid="query-button"
            onClick={ this.handleClick }
          >
            Buscar
          </button>
          <p data-testid="home-initial-message">
            Digite algum termo de pesquisa ou escolha uma categoria.
          </p>
          <Link to="/shopping-cart" data-testid="shopping-cart-button">Cart</Link>
        </header>
        <div className="content">
          <Categories />
          <CardsList products={ filteredProducts } searchIsCalled={ searchIsCalled } />
        </div>
      </>
    );
  }
}

export default Home;
