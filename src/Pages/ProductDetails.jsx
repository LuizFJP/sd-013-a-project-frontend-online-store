import React from 'react';

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

export default ProductDetails;
// feito pelo grupo via pair programming
