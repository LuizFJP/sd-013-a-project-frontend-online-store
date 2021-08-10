import React from 'react';
import { Link } from 'react-router-dom';

class ButtonAddCart extends React.Component {
  render() {
    return (
      <div>
        <Link
          to="/Cart"
          data-testid="shopping-cart-button"
        >
          Carrinho
        </Link>
      </div>
    );
  }
}

export default ButtonAddCart;
