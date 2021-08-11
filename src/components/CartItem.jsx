import React from 'react';
import PropTypes from 'prop-types';

export default class CartItem extends React.Component {
  render() {
    const { product, quantity } = this.props;
    const { title, thumbnail, price } = product;

    return (
      <li>
        <h3 data-testid="shopping-cart-product-name">{title}</h3>
        <img src={ thumbnail } alt={ title } />
        <span>{`R$${parseFloat(price).toFixed(2)}`}</span>
        <span data-testid="shopping-cart-product-quantity">
          {`Quantidade: ${quantity}`}
        </span>
      </li>
    );
  }
}

const { arrayOf, number } = PropTypes;

CartItem.propTypes = {
  product: arrayOf,
  quantity: number,
}.isRequired;
