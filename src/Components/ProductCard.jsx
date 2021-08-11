/* import React from 'react';
import { getProductsFromCategoryAndQuery } from '../services/api';

class ProductCard extends React.Component {
  constructor() {
    super();
    this.state = {
      price: 0,
      title: '',
      thumbnail: '',
    };
  }

  componentDidMount() {
    getProductsFromCategoryAndQuery()
      .then((...result) => this.setState({
        price: result.price,
        title: result.title,
        thumbnail: result.thumbnail,
      }));
  }

  render() {
    const { price, title, thumbnail } = this.state;
    return (
      <div>
        <h1>{ price }</h1>
        <h2>{ title }</h2>
        <img src={ thumbnail } alt="" />
      </div>
    );
  }
}

export default ProductCard; */
