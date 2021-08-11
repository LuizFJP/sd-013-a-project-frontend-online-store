import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

class ProductCard extends Component {
  onClick = () => {
    // e.preventDefault();
    const { addToCart, product } = this.props;
    addToCart(product);
  }

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
          data-testid="product-detail-link"
          to={ {
            pathname: `/product/${id}`,
            state: {
              product,
            },
          } }
        >
          Detalhes do Produto
        </Link>
        <button type="submit" data-testid="product-add-to-cart" onClick={ this.onClick }>
          Adicionar ao Carrinho
        </button>
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
  addToCart: PropTypes.func.isRequired,
};

export default ProductCard;
