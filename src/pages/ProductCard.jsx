import React, { Component } from 'react';
import PropTypes from 'prop-types';

class ProductCard extends Component {
  onClick = (e) => {
    // e.preventDefault();
    const { addToCart, product } = this.props;
    addToCart(product);
  }

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
    title: PropTypes.string,
    thumbnail: PropTypes.string,
  }).isRequired,
  addToCart: PropTypes.func.isRequired,
};

export default ProductCard;
