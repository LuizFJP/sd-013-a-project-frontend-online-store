import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

class ProductCard extends Component {
  render() {
    const { item: { id, title, thumbnail, price }, selCat, query } = this.props;
    return (
      <div data-testid="product" className="home-product-card">
        <span>{ title }</span>
        <img src={ thumbnail } alt={ title } />
        <span>
          R$
          { price.toFixed(2) }
        </span>
        <Link
          to={ { pathname: `/details/${id}`, state: { selCat, query } } }
          data-testid="product-detail-link"
        >
          <button type="button">Ver detalhes</button>
        </Link>
      </div>
    );
  }
}

ProductCard.propTypes = {
  item: PropTypes.shape({
    title: PropTypes.string,
    thumbnail: PropTypes.string,
    id: PropTypes.string,
    price: PropTypes.number,
  }).isRequired,
  selCat: PropTypes.string.isRequired,
  query: PropTypes.string.isRequired,
};

export default ProductCard;
