import React from 'react';
import { Link } from 'react-router-dom';

class ButtonCart extends React.Component {
  render() {
    return (

      <Link data-testid="shopping-cart-button" to="/Cart">
        <button type="button">
          <span role="img" aria-label="Cart" />
        </button>
      </Link>
    );
  }
}
export default ButtonCart;
