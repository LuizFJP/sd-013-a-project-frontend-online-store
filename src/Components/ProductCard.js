import React from 'react';
import PropTypes from 'prop-types';

class ProductCard extends React.Component {
  render() {
    const { item:  { title, thumbnail, price } }  = this.props;

    return (
      <div>
        <p>{ title }</p>
        <img src={ thumbnail } alt={ title } />
        <p>R$ { price } </p>
      </div>
    );
  }
}

ProductCard.propTypes = {
    item: PropTypes.shape({
      title: PropTypes.string,
      thumbnail: PropTypes.string,
      price: PropTypes.number,
    }).isRequired
  }

export default ProductCard;