import React from 'react';
import PropTypes from 'prop-types';
import Product from './Product';

class ProductList extends React.Component {
  render() {
    const { products } = this.props;
    console.log(products);

    if (products === undefined) {
      return (<p>Nenhum produto foi encontrado</p>);
    }
    return (
      <div>
        {products.map((product) => <Product key={ product.id } data={ product } />)}
      </div>
    );
  }
}

ProductList.propTypes = {
  products: PropTypes.arrayOf(PropTypes.object).isRequired,
  map: PropTypes.func.isRequired,
};

export default ProductList;
