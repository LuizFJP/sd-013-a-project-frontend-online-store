import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

class Product extends React.Component {
  render() {
    const { dados } = this.props;
    const { id, title, thumbnail, price } = dados;
    return (
      <div data-testid="product" className="product-card">
        <Link
          to={ {
            pathname: `/productdetails/${id}`,
            state: { dados },
          } }
          data-testid="product-detail-link"
        >
          <img src={ thumbnail } alt="Imagem de produto" />
          <span>{ title }</span>
          <span>{ price }</span>
        </Link>
      </div>
    );
  }
}

Product.propTypes = {
  dados: PropTypes.shape({
    title: PropTypes.string,
    thumbnail: PropTypes.string,
    price: PropTypes.number,
    id: PropTypes.string,
  }).isRequired,
};

export default Product;
