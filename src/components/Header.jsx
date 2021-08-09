import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Header extends Component {
  render() {
    return (
      <div>
        <h2 data-testid="home-initial-message">
          Digite algum termo de pesquisa ou escolha uma categoria.
        </h2>
        <Link to="/cart">
          <button
            data-testid="shopping-cart-button"
            type="button"
          >
            Shopping Cart
          </button>
        </Link>
      </div>
    );
  }
}
