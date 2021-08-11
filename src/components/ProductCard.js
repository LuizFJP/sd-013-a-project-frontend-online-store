import React, { Component } from 'react';
import PropTypes from 'prop-types';

class ProductCard extends Component {
  render() {
    const { item: { title, price, thumbnail } } = this.props;
    return (
      <div data-testid="product">
        <h3>{ title }</h3>
        <img src={ thumbnail } alt={ title } />
        <p>{ `R$ ${price}` }</p>
      </div>
    );
  }
}

ProductCard.propTypes = {
  item: PropTypes.objectOf({
    title: PropTypes.string,
    price: PropTypes.string,
    thumbnail: PropTypes.string,
  }).isRequired,
};

export default ProductCard;
