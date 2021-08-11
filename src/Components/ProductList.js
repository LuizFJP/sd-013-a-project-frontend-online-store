import React from 'react';
import ProductCard from './ProductCard';


class ProductList extends React.Component {
  render() {
    const { item } = this.props
    return (
      <div>
        {item.map((product) => <ProductCard key={ product.id } item= { product } />)}
      </div>

    )
  }
}

export default ProductList;