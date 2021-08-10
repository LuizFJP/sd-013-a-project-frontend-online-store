import React from 'react';
import { Link } from 'react-router-dom';
import ProductList from './ProductList';
import SearchBar from './SearchBar';
import * as API from '../services/api';

import imgCarShop from '../image/shopping-cart_icon-icons.com_60593.svg';
import Categories from './Categories';
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
        <Categories onClick={ this.fetchProducts } />
        <ProductList products={ products } />
        <Link data-testid="shopping-cart-button" to="/carshop">
          <img src={ imgCarShop } alt="carrinho de compras" />
        </Link>
      </div>
    );
  }
}

export default Home;
