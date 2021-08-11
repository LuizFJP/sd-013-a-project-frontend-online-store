import React from 'react';
import { Link } from 'react-router-dom';
import { getProductsFromCategoryAndQuery } from '../services/api';
import Categories from './Categories';
import './categories.css';
import Product from './Product';

class Home extends React.Component {
  constructor() {
    super();

    this.state = {
      selectedCate: undefined,
      product: [],
    };
    this.selectCategory = this.selectCategory.bind(this);
    this.productList = this.productList.bind(this);
  }

  async productList() {
    const { selectedCate } = this.state;
    const query = document.querySelector('.inputSearch').value;
    const json = await getProductsFromCategoryAndQuery(selectedCate, query);
    const products = json.results.map((product) => (
      <Product
        key={ product.id }
        product={ product }
      />
    ));

    if (products.length === 0) return <p>Nao encontrado</p>;
    this.setState({ product: products });
  }

  selectCategory() {
    const selected = document.querySelector('input[name="categories"]:checked').value;
    this.setState({ selectedCate: selected }, () => this.productList());
  }

  render() {
    const { product } = this.state;
    return (
      <div>
        <p data-testid="home-initial-message">
          Digite algum termo de pesquisa ou escolha uma categoria.
        </p>
        <button
          onClick={ this.productList }
          data-testid="query-button"
          type="button"
        >
          Procurar
        </button>
        <input
          className="inputSearch"
          data-testid="query-input"
          type="text"
        />
        <Link to="/ShoppingCart">
          <button
            type="button"
            data-testid="shopping-cart-button"
          >
            CARRINHO DE COMPRAS
          </button>
        </Link>
        <div className="my-categories">
          <Categories selectCategory={ this.selectCategory } />
          <div>
            LISTA DE PRODUTOS
            {product}
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
