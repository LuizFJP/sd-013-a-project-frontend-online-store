import React, { Component } from 'react';
import PropTypes from 'prop-types';
import AddToCart from '../components/AddToCart';

class ProductDetails extends Component {
  render() {
    const { props: { location: { state } } } = this;
    const { title, price, thumbnail } = state;
    document.title = 'product-details';

    return (
      <section className="productDetails">
        <p>{`R$ ${price}`}</p>
        <img alt="title" src={ thumbnail } />
        <div>
          <h2 data-testid="product-detail-name">{ title }</h2>
          <AddToCart
            product={ state }
            dataTestId="product-detail-add-to-cart"
          />
        </div>
      </section>
    );
  }
}

ProductDetails.propTypes = {
  location: PropTypes.shape({
    state: PropTypes.shape({}),
  }),
  title: PropTypes.string,
  thumbnail: PropTypes.string,
  price: PropTypes.number,
}.isRequired;

export default ProductDetails;
