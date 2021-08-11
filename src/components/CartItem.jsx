import React from 'react';
import PropTypes from 'prop-types';

export default class CartItem extends React.Component {
  constructor(props) {
    super(props);
    const { quantity } = this.props;
    this.state = {
      quant: quantity,
    };
  }

  changeCart = (id, operator) => {
    const cart = JSON.parse(localStorage.getItem(id));
    console.log(cart);
    const product = cart.filter((item) => item.id === id);
    console.log(product);
    const { quant } = this.state;

    switch (operator) {
    case '+':
      // console.log('+');
      console.log(product.length);
      this.setState({ quant: quant + 1 });
      break;
    case '-':
      this.setState({ quant: quant - 1 });
      // console.log('-');
      break;
    case 'X' || product.quantity <= 0:
      localStorage.removeItem(id);
      window.location.reload();
      break;
    default:
      break;
    }
  };

  render() {
    const { product } = this.props;
    const { id, title, thumbnail, price } = product;
    const { quant } = this.state;

    return (
      <li>
        <h3 data-testid="shopping-cart-product-name">{title}</h3>
        <img src={ thumbnail } alt={ title } />
        <span>{`R$${parseFloat(price).toFixed(2)}`}</span>
        <span data-testid="shopping-cart-product-quantity">
          {`Quantidade: ${quant}`}
        </span>
        <button
          data-testid="product-decrease-quantity"
          type="button"
          onClick={ () => this.changeCart(id, '-') }
        >
          -
        </button>
        <button
          data-testid="product-increase-quantity"
          type="button"
          onClick={ () => this.changeCart(id, '+') }
        >
          +
        </button>
        <button type="button" onClick={ () => this.changeCart(id, 'X') }>
          X
        </button>
      </li>
    );
  }
}

const { arrayOf } = PropTypes;

CartItem.propTypes = {
  product: arrayOf,
  // quantity: number,
}.isRequired;
