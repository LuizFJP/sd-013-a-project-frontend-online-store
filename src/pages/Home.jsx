import React from 'react';
import { ButtonAddCart, ProductList, CategoriesList, SearchBar } from '../components';
import * as api from '../services/api';

class Home extends React.Component {
  constructor() {
    super();

    this.state = {
      query: '',
      products: [],
      found: true,
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleQuery = this.handleQuery.bind(this);
    this.getProduct = this.getProduct.bind(this);
  }

  handleQuery(event) {
    this.setState({
      query: event.target.value,
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    const { query } = this.state;
    this.getProduct('', query);
  }

  async getProduct(categoryId, query) {
    const productAPI = await api.getProductsFromCategoryAndQuery(categoryId, query);

    this.setState({
      products: productAPI.results, // coloquei .products
    });
  }

  render() {
    const { query, products, found } = this.state;
    return (
      <div>
        <CategoriesList />
        <ButtonAddCart />
        <SearchBar
          query={ query }
          handleQuery={ this.handleQuery }
          handleSubmit={ this.handleSubmit }
        />
        <ProductList products={ products } found={ found } />
      </div>
    );
  }
}

export default Home;
