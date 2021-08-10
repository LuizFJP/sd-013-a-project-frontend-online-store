import React from 'react';
import ProductList from './ProductList';
import SearchBar from './SearchBar';
import * as API from '../services/api';
// Rodrigo Pova, Luiz Furtado, Filipe Cândido, Felipe Chagas, Danilo Uehara
class Home extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      products: [],
    };
  }

  fetchProducts = async (query, categoryId = '') => {
    const requestProducts = await API.getProductsFromCategoryAndQuery(categoryId, query);
    this.setState({ products: [...requestProducts.results] });
  }

  render() {
    const { products } = this.state;
    return (
      <div>
        <SearchBar onClick={ this.fetchProducts } />
        <ProductList products={ products } />
      </div>
    );
  }
}

export default Home;
