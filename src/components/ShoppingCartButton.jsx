import React from 'react';
import { Link } from 'react-router-dom';

export default class ShoppingCartButton extends React.Component {
  render() {
    return (
      <div>
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
