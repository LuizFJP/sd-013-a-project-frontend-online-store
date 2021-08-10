import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import ProductDetails from './ProductDetails';

class ProductCard extends Component {
  render() {
    const { product } = this.props;
    const { price, title, thumbnail, id } = product;

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
        <Link
          type="button"
          onClick={ () => <ProductDetails /> }
          data-testid="product-detail-link"
          to={ { pathname: `/ProductDetails/${id}` } }
        >
          Detalhes do Produto
        </Link>
      </div>
    );
  }
}

ProductCard.propTypes = {
  product: PropTypes.shape({
    price: PropTypes.number,
    id: PropTypes.string,
    title: PropTypes.string,
    thumbnail: PropTypes.string,
  }).isRequired,
};

export default ProductCard;
