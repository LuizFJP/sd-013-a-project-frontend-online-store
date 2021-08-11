import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import './productCard.css';
import AddToCart from '../components/componentsIndex';

class ProductCard extends Component {
  render() {
    const { product } = this.props;
    const { id, title, thumbnail, price } = product;

    return (

      <div className="product-card" data-testid="product">
        <Link
          data-testid="product-detail-link"
          to={ {
            pathname: `/product-details/${id}`,
            state: product,
          } }
        >
          <h2>{ title }</h2>
          <img src={ thumbnail } alt="Product Thumbnail" />
          <span>
            { `Preço R$ ${price}` }
          </span>
        </Link>
        <AddToCart
          product={ product }
          dataTestId="product-add-to-cart"
        />
      </div>
    );
  }
}

ProductCard.propTypes = {
  product: PropTypes.shape({
    id: PropTypes.string,
    title: PropTypes.string,
    thumbnail: PropTypes.string,
    price: PropTypes.number,
  }).isRequired,
};

export default ProductCard;
