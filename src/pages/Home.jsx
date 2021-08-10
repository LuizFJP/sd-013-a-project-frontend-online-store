import React from 'react';
import { Link } from 'react-router-dom';
import ProductList from './ProductList';
import SearchBar from './SearchBar';
import * as API from '../services/api';

import imgCarShop from '../image/shopping-cart_icon-icons.com_60593.svg';
import Categories from './Categories';
// import CarShop from './CarShop';
// Rodrigo Pova, Luiz Furtado, Filipe Cândido, Felipe Chagas, Danilo Uehara
class Home extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      products: [],
      carrinho: ['QUALQUER COISA'],
    };
  }

  fetchProducts = async (query, categoryId = '') => {
    const requestProducts = await API.getProductsFromCategoryAndQuery(categoryId, query);
    this.setState({ products: [...requestProducts.results] });
  }

  addToCart = (product) => {
    this.setState({ carrinho: [...this.state.carrinho, product] });
    console.log(this.state.carrinho);
  }

  render() {
    const { products, carrinho } = this.state;
    return (
      <div>
        <SearchBar onClick={ this.fetchProducts } />
        <Categories onClick={ this.fetchProducts } />
        <ProductList products={ products } addToCart={ this.addToCart } />
        <Link
          data-testid="shopping-cart-button"
          to={
            { pathname: '/carshop',
              state: { carrinho } }
          }
        >
          <img src={ imgCarShop } alt="carrinho de compras" />
        </Link>
      </div>

    );
  }
}

export default Home;
