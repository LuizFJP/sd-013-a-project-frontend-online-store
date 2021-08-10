import React from 'react';
import PropTypes from 'prop-types';

class Product extends React.Component {
  render() {
    const { data } = this.props;
    return (
      <div data-testid="product">
        <h1>{data.title}</h1>
        <img src={ data.thumbnail } alt={ data.title } />
        <h2>{data.price}</h2>
      </div>
    );
  }
}

Product.propTypes = {
  data: PropTypes.shape({
    title: PropTypes.string,
    thumbnail: PropTypes.string,
    price: PropTypes.number,
  }).isRequired,
};

export default Product;
