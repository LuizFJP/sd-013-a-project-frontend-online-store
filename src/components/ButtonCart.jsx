import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class ButtonCart extends Component {
  render() {
    return (
      <Link to="/mycart" data-testid="shopping-cart-button">
        <spam>🛒</spam>
      </Link>
    );
  }
}

export default ButtonCart;
