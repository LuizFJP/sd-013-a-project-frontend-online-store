import React, { Component } from 'react';

class ProductCard extends Component {
  render() {
    const {
      product: {
        price, title, thumbnail,
      },
    } = this.props;

    return (
      <div data-testeid="product">
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

export default ProductCard;
