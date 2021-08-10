import React, { Component } from 'react';
import '../style.css/home.css';
import { FaShoppingCart } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import Categories from '../components/Categories';

export default class Home extends Component {
  render() {
    return (
      <div>
        <header>
          <h1>Mockado Livre</h1>
          <div className="leftSide">
            <Link data-testid="shopping-cart-button" to="/Cart">
              <FaShoppingCart className="cart" />
            </Link>
          </div>
        </header>
        <div className="searchArea">
          <input className="searchBar" type="text" />
          <p data-testid="home-initial-message">
            Digite algum termo de pesquisa ou escolha uma categoria.
          </p>
        </div>
        <Categories />
        <footer>
          <h5>
            Desenvolvido por:
            <a href="https://github.com/cae07" target="_blank" rel="noopener noreferrer"> Caê</a>
            <a href="https://github.com/ogustavomauricio" target="_blank" rel="noopener noreferrer"> Gustavo </a>
            <a href="https://github.com/JeanVPacheco" target="_blank" rel="noopener noreferrer"> Jean </a>
            <a href="https://github.com/pabloalmeidac" target="_blank" rel="noopener noreferrer"> Pablo</a>
            <p>Projeto para formação no curso de Desenvolvedor Web da Trybe</p>
          </h5>
        </footer>
      </div>
    );
  }
}
