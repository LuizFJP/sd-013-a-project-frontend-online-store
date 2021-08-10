import React from 'react';
import ProductCard from './ProductCard';
import * as api from '../services/api';

class ProductList extends React.Component {
  constructor() {
    super()

    this.state = {
      products: [],
    }

    this.getQuery = this.getQuery.bind(this)
  }
  
  componentDidMount() {
    this.getQuery()
  }

  async getQuery () {
    const request = await api.getProductsFromCategoryAndQuery(categoryId, query);
    this.setState({
      products: request
    })
  }

  render() {
    return (
      <ProductCard item={item} />
      products.map((item) => <ProductCard item= {item} /> 
    );
  }
}

export default ProductList;