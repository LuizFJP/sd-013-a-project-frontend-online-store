import React from 'react';
import { Link } from 'react-router-dom';

class Product extends React.Component {
  constructor() {
    super();

    this.componentDidMount = this.componentDidMount.bind(this);
  }

  componentDidMount() {
    console.log(this.props);
  }

  render() {
    const { product : { thumbnail, price, title, id }, product } = this.props;
    return (
      <div data-testid="product">
        <h3>{ title }</h3>
        <img src={ thumbnail } alt="foto do produto" />
        <p>{ price }</p>
        <Link to={ { pathname: `/Details/${id}`, state: { product } } }>
          <h2 data-testid="product-detail-link">
            DETALHES
          </h2>
        </Link>
      </div>
    );
  }
}

export default Product;
