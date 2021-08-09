import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

class ProductCard extends Component {
  setLocalStorage = (id, title, price) => {
    const product = { id, title, price, quantity: 1 };

    if (localStorage.cart) {
      const cart = JSON.parse(localStorage.cart);
      const filteredCart = cart.filter((item) => {
        if (item.id === product.id) {
          product.quantity = item.quantity + 1;
          return false;
        }
        return true;
      });
      localStorage.cart = JSON.stringify([...filteredCart, product]);
    } else {
      localStorage.cart = JSON.stringify([product]);
    }
  }

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
        <button
          data-testid="product-add-to-cart"
          type="button"
          onClick={ () => this.setLocalStorage(id, title, price) }
        >
          Adicionar ao carrinho
        </button>
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
