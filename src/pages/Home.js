import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import * as api from '../services/api';
import { ProductCard, CategoriesFilter } from '../components/componentsIndex';
import cartIcon from '../images/shopping_cart_black_24dp.svg';
import './home.css';
import './input.css';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputValue: '',
      categoria: '',
      noSearch: true,
      products: [],
      notFound: false,
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
    const request = await api.getProductsFromCategoryAndQuery(categoria, inputValue);
    console.log(request);
    if (request.results.length === 0) {
      this.setState({
        products: [],
        notFound: true,
        noSearch: false,
      });
    } else {
      this.setState({
        products: request.results,
        noSearch: false,
        notFound: false,
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
        notFound: false,
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
    const { inputValue, noSearch, notFound, products } = this.state;

    const productCards = products.map((product) => (
      <ProductCard
        key={ product.id }
        product={ product }
      />
    ));

    const productList = (
      <div className="productList">
        { productCards }
      </div>
    );

    const facaUmaBusca = (
      <p data-testid="home-initial-message" className="searchMsg">
        Digite algum termo de pesquisa ou escolha uma categoria.
      </p>
    );

    const naoEncontrado = (
      <p className="notFound">
        Nenhum produto foi encontrado
      </p>
    );

    return (
      <>
        <section className="inputHome">
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
            <Link to="/Cart" data-testid="shopping-cart-button">
              <img className="shoppingCart" src={ cartIcon } alt="shopping cart" />
            </Link>
          </div>
        </section>
        <section className="homeScreen">
          <CategoriesFilter onChange={ this.handleChangeCategory } />
          { noSearch && facaUmaBusca }
          { !noSearch && productList }
          { notFound && naoEncontrado}
        </section>
      </>
    );
  }
}

export default Home;
