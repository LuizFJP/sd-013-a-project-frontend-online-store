import React from 'react';
import { ButtonAddCart, ProductList, CategoriesList, SearchBar } from '../components';
import * as api from '../services/api';

class Home extends React.Component {
  constructor() {
    super();

    this.state = {
      query: '',
      categoryId: '',
      products: [],
      found: true,
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleQuery = this.handleQuery.bind(this);
    this.getProduct = this.getProduct.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.handleCategoryId = this.handleCategoryId.bind(this);
  }

  handleQuery(event) {
    this.setState({
      query: event.target.value,
    });
  }

  handleCategoryId(event) {
    this.setState({
      categoryId: event.target.id,
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    const { query } = this.state;
    this.getProduct('', query);
  }

  handleClick(event) {
    event.preventDefault();
    const { categoryId } = this.state;
    this.getProduct(categoryId, '');
    console.log('xablau');
  }

  async getProduct(categoryId, query) {
    const productAPI = await api.getProductsFromCategoryAndQuery(categoryId, query);

    this.setState({
      products: productAPI.results, // coloquei .products
    });
  }

  render() {
    const { query, products, found, categoryId } = this.state;
    return (
      <div>
        <CategoriesList
          handleClick={ this.handleClick }
          handleCategoryId={ this.handleCategoryId }
          categoryId={ categoryId }
        />
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
