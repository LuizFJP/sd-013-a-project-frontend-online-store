import PropTypes from 'prop-types';
import React, { Component } from 'react';

export default class ProductDetails extends Component {
  render() {
    const { product } = this.props;
    const { title, price, thumbnail } = product;
    return (
      <aside className="container-details">
        <div className="details-product">
          <h1 data-testid="product-detail-name">{`${title} - valor $${price}`}</h1>
          <img src={ thumbnail } alt={ title } height="600px" width="500px" />
        </div>
        <div className="specification">
          <p>1</p>
          <p>2</p>
          <p>3</p>
          <p>4</p>
        </div>
      </aside>
    );
  }
}

ProductDetails.propTypes = {
  product: PropTypes.object,
  price: PropTypes.number,
  thumbnail: PropTypes.string,
  title: PropTypes.string,
}.isRequired;
