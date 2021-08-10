import React from 'react';
import { ButtonAddCart, ProductList, CategoriesList, SeachBar } from '../components';
import * as api from '../services/api';

class Home extends React.Component {
  constructor() {
    super();

    this.state = {
      query: '',
      products: [],
    };
    this.handleQuery = this.handleQuery.bind(this);
    this.getProduct = this.getProduct.bind(this);
  }

  handleQuery(event) {
    this.setState({
      query: event.target.value,
    });
  }

  handleClick(event) {
    // const { match: {params: { categoryId, query } } } = this.props;
    // this.getProduct(categoryId, query);
    console.log('aaa');
  }

  async getProduct(categoryId, query) {
    // const { id:categoryId, query } = this.props;
    const productAPI = await api.getProductsFromCategoryAndQuery(categoryId, query);

    this.setState({
      products: productAPI,
    });
  }

  render() {
    const { query, products } = this.state;
    return (
      <div>
        <CategoriesList />
        <ButtonAddCart />
        <SeachBar query={ query } handleQuery={ this.handleQuery } handleClick={ this.handleClick }/>
        <ProductList
          query={ query }
          handleClick={ this.handleClick }
          products={ products }
        />
      </div>
    );
  }
}

export default Home;
