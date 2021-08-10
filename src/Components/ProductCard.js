import React from 'react';
import PropTypes from 'prop-types';

class ProductCard extends React.Component {
  render() {
    const { item: { results: { title, thumbnail, price } } } = this.props;

    return (
      <div>
        <h1>{ title }</h1>
        <img src={ thumbnail } alt={ title } />
        <h1>R$ { price }</h1>
      </div>
    );
  }
}

ProductCard.propTypes = {
  item: PropTypes.shape ({
    results: PropTypes.shape ({
      title: PropTypes.string.isRequired,
      thumbnail: PropTypes.string.isRequired,
      price: PropTypes.number.isRequired,
    })
  })
}

export default ProductCard;