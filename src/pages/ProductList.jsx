import React from 'react';
import * as API from '../services/api';
import ProductCard from './ProductCard';

class ProductList extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      products: [],
    };
  }

  componentDidMount() {
    this.fetchProducts();
  }

  fetchProducts = async () => {
    const { categoryId, query } = this.props;
    // console.log(this.props);
    const requestProducts = await API.getProductsFromCategoryAndQuery(categoryId, query);
    console.log('linha22', requestProducts);
    this.setState({ products: requestProducts });
  }

  render() {
    const { products } = this.state;
    return (
      <div data-testid="product-list">
        {products.map((product) => <ProductCard key={ product.id } product={ product } />)}
      </div>
    );
  }
}

export default ProductList;
