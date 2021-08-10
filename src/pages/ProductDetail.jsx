import React from 'react';
import ButtonAddCart from '../components/ButtonAddCart';

class ProductDetail extends React.Component {
  render() {
    return (
      <div>
        <ButtonAddCart />
        <h2>Detalhamento de produto</h2>
      </div>
    );
  }
}

export default ProductDetail;
