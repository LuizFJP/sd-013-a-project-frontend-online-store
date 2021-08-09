import React, { Component } from 'react';
import PropTypes from 'prop-types';

class ProductCard extends Component {
  render() {
    const { item: { title, thumbnail, price } } = this.props;
    return (
      <div data-testid="product">
        <span>{ title }</span>
        <img src={ thumbnail } alt={ title } />
        <span>{ price }</span>
      </div>
    );
  }
}

ProductCard.propTypes = {
  item: PropTypes.shape({
    title: PropTypes.string,
    thumbnail: PropTypes.string,
    price: PropTypes.number,
  }).isRequired,
};

export default ProductCard;
