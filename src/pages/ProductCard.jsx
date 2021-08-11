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
      <div data-testid="product" className="product">
        <div className="product-info">
          <img src={ thumbnail } alt={ title } className="img-product" />
          <span className="p-info">{title}</span>
          <span> </span>
          <span className="value">
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
