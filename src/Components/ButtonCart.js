import React from 'react';
import { Link } from 'react-router-dom';
import { FaShoppingCart } from 'react-icons/fa'

class ButtonCart extends React.Component {
  render() {
    return (
      <div>
        <Link to="/shoppingcart" data-testid="shopping-cart-button">
          <FaShoppingCart />
        </Link>
      </div>
    );
  }
}

export default ButtonCart;
