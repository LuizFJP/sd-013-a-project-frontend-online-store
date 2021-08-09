import React, { Component } from 'react';
import Categories from '../components/Categories';
import '../style.css/home.css';
import { FaShoppingCart } from 'react-icons/fa';
import { Link } from 'react-router-dom';

export default class Home extends Component {
  render() {
    return (
      <div>
        <header><h1>Mockado Livre</h1></header>
        <input className="searchBar" type="text" />
        <p data-testid="home-initial-message">
          Digite algum termo de pesquisa ou escolha uma categoria.
        </p>
        <Categories />
        <Link data-testid="shopping-cart-button" to="/Cart">
          <FaShoppingCart size={ 20 } color="grey" />
        </Link>
      </div>
    );
  }
}
