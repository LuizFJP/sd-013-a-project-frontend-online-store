import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class CartButton extends Component {
  render() {
    return (
      <Link data-testid="shopping-cart-button" to="/cart">
        <button type="button"><span role="img" aria-label="cart">🛒</span></button>
      </Link>
    );
  }
}

export default CartButton;
