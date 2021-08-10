import React from 'react';
import * as api from '../services/api';

class ProductList extends React.Component {
  constructor(props) {
    super(props);

    this.state ={
      products: [],
      found: true,
    };
  }

  componentDidMount() {
    this.getProduct();
  }

  async getProduct() {
    const productAPI = await api.getProductsFromCategoryAndQuery();

    this.setState({
      products: productAPI,
    });
  }

  render() {
    const { found, products } = this.state;
    if (!found) return <p>Nenhum produto foi encontrado</p>;
    return (
      <div>
        <label htmlFor="Product-Search">
          <input
            type="text"
            data-testid="query-input"
            name="Product-Search"
          />
          <button
            type="submit"
            data-testid="query-button"
            name="Product-Search"
          >
            Buscar:
          </button>
        </label>
        <div>
          {/* { products.map((product) => )} */}
        </div>
      </div>
    );
  }
}

export default ProductList;
