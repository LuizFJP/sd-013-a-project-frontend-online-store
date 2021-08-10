import React from 'react';
import * as api from '../services/api';
import { ProductItem } from '.';

class ProductList extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      products: [],
    };
    this.getProduct = this.getProduct.bind(this);
  }

  componentDidMount() {
    this.getProduct();
  }

  async getProduct() {
    const { categoryId, query } = this.props;
    const productAPI = await api.getProductsFromCategoryAndQuery(categoryId, query);

    this.setState({
      products: productAPI,
    });
  }

  render() {
    const { products } = this.state;
    // if (!found) return <p>Nenhum produto foi encontrado</p>;
    return (
      <div>
        {products.map((product) => (
          <ProductItem product={ product } key={ product.id } />
        ))}
      </div>
    );
  }
}

export default ProductList;
