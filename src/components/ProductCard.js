import React, { Component } from 'react';
import PropTypes from 'prop-types';

class ProductCard extends Component {
  render() {
    const { item: { title, thumbnail, price } } = this.props;
    return (
      <div data-testid="product" className="home-product-card">
        <span>{ title }</span>
        <img src={ thumbnail } alt={ title } />
        <span>
          R$
          { price.toFixed(2) }
        </span>
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
