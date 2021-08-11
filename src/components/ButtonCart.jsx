import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class ButtonCart extends Component {
  render() {
    return (
      <Link to="/mycart" data-testid="shopping-cart-button">
        <span role="img" aria-label="meu carrinho">🛒</span>
      </Link>
    );
  }
}

export default ButtonCart;
