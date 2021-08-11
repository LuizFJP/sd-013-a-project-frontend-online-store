import React from 'react';
import { Link } from 'react-router-dom';
import { FaShoppingCart } from 'react-icons/fa';
import { getLocalStorageData } from '../services/localStorage';
// import { AiOutlineShoppingCart } from 'react-icons'
export default class ShoppingCartButton extends React.Component {
  data = () => {
    const keys = Object.keys(localStorage);
    const products = keys.map((key) => getLocalStorageData(key));
    const productsQuantity = products.map((product) => product.length);
    const result = productsQuantity.reduce(((a, b) => a + b), 0);

    return result;
  };

  render() {
    return (
      <section>
        <Link to="/cart">
          <button
            data-testid="shopping-cart-button"
            type="button"
          >
            <FaShoppingCart />
          </button>
        </Link>
        <span data-testid="shopping-cart-size">{ this.data() }</span>
      </section>
    );
  }
}
