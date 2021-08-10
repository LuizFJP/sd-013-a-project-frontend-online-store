import React from 'react';
import { Link } from 'react-router-dom';
import { getCategories, getProductsFromCategoryAndQuery } from '../services/api';
import CategoriesList from './CategoriesList';
import ProductList from './ProductList';

// coment

class Home extends React.Component {
  constructor() {
    super();
    this.state = {
      categories: [],
      inputValue: '',
      products: [],
    };
    this.categories = this.categories.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.getProduct = this.getProduct.bind(this);
  }

  componentDidMount() {
    this.categories();
  }

  handleChange(event) {
    this.setState({
      inputValue: event.target.value,
    });
    this.getProduct();
  }

  async getProduct() {
    const { inputValue } = this.state;
    const products = await getProductsFromCategoryAndQuery('', inputValue);
    this.setState({
      products,
    });
  }

  async categories() {
    const categories = await getCategories();
    console.log(categories);
    this.setState({
      categories,
    });
  }

  render() {
    const { categories, products } = this.state;
    return (
      <div>
        <CategoriesList categories={ categories } />
        <form>
          <label
            type="text"
            data-testid="home-initial-message"
            htmlFor="home-initial-message"
          >
            Digite algum termo de pesquisa ou escolha uma categoria.
            <input
              type="text"
              id="home-initial-message"
              data-testid="query-input"
              onChange={ this.handleChange }
            />
          </label>
          <button type="button" data-testid="query-button">Pesquisa</button>
          <Link
            to="/cart"
            type="button"
            id="cart-button"
            data-testid="shopping-cart-button"
          >
            Cart
          </Link>
        </form>
        <ProductList products={ products.results } />
      </div>
    );
  }
}

export default Home;
