import React, { Component } from 'react';
import PropTypes from 'prop-types';

class ProductCard extends Component {
  render() {
    const {
      product: {
        price, title, thumbnail,
      },
    } = this.props;

    return (
      <div data-testid="product">
        <div className="product-img">
          <img src={ thumbnail } alt={ title } />
        </div>
        <div className="product-info">
          <span>{title}</span>
          <span>
            R$
            {price}
          </span>
        </div>
      </div>
    );
  }
}

ProductCard.propTypes = {
  product: PropTypes.shape({
    price: PropTypes.number,
    title: PropTypes.string,
    thumbnail: PropTypes.string,
  }).isRequired,
};

export default ProductCard;
