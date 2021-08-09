import React, { Component } from 'react';
import '../style.css/home.css';
import { FaShoppingCart } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import Categories from '../components/Categories';

export default class Home extends Component {
  render() {
    return (
      <div>
        <header><h1>Mockado Livre</h1></header>
        <div className="searchArea">
          <input className="searchBar" type="text" />
          <p data-testid="home-initial-message">
            Digite algum termo de pesquisa ou escolha uma categoria.
          </p>
        </div>
        <Categories />
        <Link data-testid="shopping-cart-button" to="/Cart">
          <FaShoppingCart size={ 20 } color="grey" />
        </Link>
      </div>
    );
  }
}
