import React from 'react';
import {
  Link } from 'react-router-dom';
import Category from './Category';

export default class App extends React.Component {
  render() {
    return (
      <div>
        <Link data-testid="shopping-cart-button" to="/cart">
          <img src="https://i.pinimg.com/originals/15/4f/df/154fdf2f2759676a96e9aed653082276.png" alt="cart button" />
        </Link>
        <h1 data-testid="home-initial-message">
          Digite algum termo de pesquisa ou escolha uma categoria.
        </h1>
        <Category />
      </div>
    );
  }
}
