import React from 'react';
import ProductList from './ProductList';
import SearchBar from './SearchBar';
import * as API from '../services/api';
import { Link } from 'react-router-dom';
import Categories from './Categories';
import imgCarShop from '../image/shopping-cart_icon-icons.com_60593.svg';
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
        <Categories />
        <Link data-testid="shopping-cart-button" to="/carshop">
          <img src={ imgCarShop } alt="carrinho de compras" />
        </Link>
      </div>
    );
  }
}

export default Home;
