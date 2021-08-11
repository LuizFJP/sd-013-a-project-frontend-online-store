import React from 'react';
import PropTypes from 'prop-types';

class ProductDetails extends React.Component {
  render() {
    const { productDetails } = this.props;

    return (
      <div>
        <h1 data-testid="product-detail-name">{ productDetails.title }</h1>
      </div>
    );
  }
}

ProductDetails.propTypes = {
  productDetails: PropTypes.objectOf(PropTypes.any).isRequired,
};

export default ProductDetails;
// feito pelo grupo via pair programming
