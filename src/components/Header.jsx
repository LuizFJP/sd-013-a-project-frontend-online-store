import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

class Header extends Component {
  render() {
    const { cartItems } = this.props;
    const totalItems = cartItems.reduce((acc, curr) => acc + curr.quant, 0);

    return (
      <header className="header-container">
        <div className="title-container">
          <h2>Project Frontend Online Shopp</h2>
          <p data-testid="home-initial-message">
            Digite algum termo de pesquisa ou escolha uma categoria.
          </p>
        </div>
        <Link
          to="/cart"
          data-testid="shopping-cart-size"
        >
          Carrinho
          <span style="color:green">{totalItems}</span>
        </Link>

      </header>
    );
  }
}

Header.propTypes = {
  cartItems: PropTypes.arrayOf,
}.isRequired;

export default Header;
