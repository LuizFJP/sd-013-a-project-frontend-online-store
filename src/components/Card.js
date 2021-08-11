import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

class Card extends React.Component {
  render() {
    const { product: { title, price, thumbnail, id }, handleAddProduct, product } = this.props;
    return (
    <div>
      <Link
        to={ { pathname: `/details/${id}`, state: title } }
        data-testid="product-detail-link"
      >
        <div data-testid="product" className="card-item">
          <p>{ title }</p>
          <img src={ thumbnail } alt={ `imagem de(o) ${title}` } />
          <p>{ price }</p>
        </div>
      </Link>
      <button data-testid="product-add-to-cart" onClick={() => handleAddProduct(product)}>Adicionar ao carrinho</button>
    </div>
    );
  }
}

Card.propTypes = {
  product: PropTypes.shape({         
    title: PropTypes.string,
    price: PropTypes.oneOfType([
      PropTypes.number,
      PropTypes.string,
    ]),
    thumbnail: PropTypes.string,
    id: PropTypes.string,
  }).isRequired,
};

export default Card;
