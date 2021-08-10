import React, { Component } from 'react';
import '../style.css/home.css';
import { FaShoppingCart, FaSearch } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import Categories from '../components/Categories';
import * as api from '../services/api';
import Results from '../components/Results';

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchInput: '',
      searchResults: [],
    };
  }

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  }

  handleClick = (id) => {
    const { searchInput } = this.state;
    console.log(id);
    api.getProductsFromCategoryAndQuery(id, searchInput)
      .then((resolve) => this.setState({ searchResults: resolve.results }));
  }

  render() {
    const { searchInput, searchResults } = this.state;
    return (
      <div>
        <header>
          <h1>Mockado Livre</h1>
          <div className="leftSide">
            <Link data-testid="shopping-cart-button" to="/Cart">
              <FaShoppingCart className="cart" />
            </Link>
          </div>
        </header>
        <div className="searchArea">
          <input
            className="searchBar"
            type="text"
            name="searchInput"
            data-testid="query-input"
            onChange={ this.handleChange }
            value={ searchInput }
          />
          <p data-testid="home-initial-message">
            Digite algum termo de pesquisa ou escolha uma categoria.
          </p>
          <button
            type="button"
            aria-label="Search"
            data-testid="query-button"
            onClick={ this.handleClick }
          >
            <FaSearch />
          </button>
        </div>
        <Categories onClick={ this.handleClick } />
        <main>
          <Results searchResults={ searchResults } />
        </main>
        <footer>
          <h5>
            Desenvolvido por:
            <a href="https://github.com/cae07" target="_blank" rel="noopener noreferrer"> Caê</a>
            <a href="https://github.com/ogustavomauricio" target="_blank" rel="noopener noreferrer"> Gustavo </a>
            <a href="https://github.com/JeanVPacheco" target="_blank" rel="noopener noreferrer"> Jean </a>
            <a href="https://github.com/pabloalmeidac" target="_blank" rel="noopener noreferrer"> Pablo</a>
            <p>Projeto para formação no curso de Desenvolvedor Web da Trybe</p>
          </h5>
        </footer>
      </div>
    );
  }
}
