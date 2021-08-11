import React, { Component } from 'react';
import { getProductsFromCategoryAndQuery } from '../../services/api';

export default class productList extends Component {
  constructor(props) {
    super(props);

    const { selectedCategory, categories } = this.props;

    this.state = {
      products: [],
    };

    this.fetchProducts = this.fetchProducts.bind(this);
  }

  componentDidMount() {
    this.fetchProducts();
  }

  async fetchProducts() {
    const products = await getProductsFromCategoryAndQuery();

    const { results } = products;
    console.log(products);
    this.setState({
      products: results,
    });
  }

  render() {
    const { products } = this.state;

    return (
      <div>
        LSITA DE PRODUTOS
        {products.map(({ id, title, price, thumbnail }) => (
          <div key={ id }>
            <h2>{title}</h2>
            <img src={ thumbnail } alt={ title } />
            <p>{ price }</p>
          </div>
        ))}
      </div>
    );
  }
}
