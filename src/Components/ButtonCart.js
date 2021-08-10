import React from 'react';
import { Link } from 'react-router-dom';

class ButtonCart extends React.Component {
  render() {
    return (
      <div>
        <Link to="/shoppingcart" data-testid="shopping-cart-button">
          🛒
        </Link>
      </div>
    );
  }
}

export default ButtonCart;
