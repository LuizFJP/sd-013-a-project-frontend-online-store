import React from 'react';

class ProductItem extends React.Component {
  render() {
    const { product: { title, thumbnail, price }} = this.props;
    return (
      <div>
        <p>{ title }</p>
        <img src={ thumbnail } alt={ title } />
        <p>{price}</p>
      </div>
    );
  }
}

export default ProductItem;
