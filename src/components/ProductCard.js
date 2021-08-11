import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

class ProductCard extends Component {
  render() {
    const { item: { title, thumbnail, price, id } } = this.props;
    return (
      <Link
        to={ `/details/${id}` }
        data-testid="product-detail-link"
      >
        <div data-testid="product">
          <span>{ title }</span>
          <img src={ thumbnail } alt={ title } />
          <span>{ price }</span>
        </div>
      </Link>
    );
  }
}

ProductCard.propTypes = {
  item: PropTypes.shape({
    title: PropTypes.string,
    thumbnail: PropTypes.string,
    price: PropTypes.number,
    id: PropTypes.string,
  }).isRequired,
};

export default ProductCard;
