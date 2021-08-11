import React from 'react';
import PropTypes from 'prop-types';

class Product extends React.Component {
  render() {
    const { dados: { title, thumbnail, price } } = this.props;
    return (
      <div data-testid="product" className="product-card">
        <img src={ thumbnail } alt="Imagem de produto" />
        <span>{ title }</span>
        <span>{ price }</span>
      </div>
    );
  }
}

Product.propTypes = {
  dados: PropTypes.shape({
    title: PropTypes.string,
    thumbnail: PropTypes.string,
    price: PropTypes.number,
  }).isRequired,
};

export default Product;
