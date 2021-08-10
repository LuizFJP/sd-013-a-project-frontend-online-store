import React from 'react';
import * as api from '../services/api';

class ProductDetail extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      product: {},
    };

    this.fetchProduct = this.fetchProduct.bind(this);
  }

  componentDidMount() {
    this.fetchProduct();
  }

  async fetchProduct() {
    const { match: { params: { id } } } = this.props;
    // const parameters = identification.split('-');
    // const title = parameters[0];
    // const id = parameters[1];
    console.log(id);
    // console.log(title);
    const { results } = await api.getProductsFromCategoryAndQuery('', id);
    console.log(results);
    // const product = results.find((item) => item.id === id);
    console.log(product);

    this.setState({
      product,
    });
  }

  render() {
    const { product } = this.state;
    return (
      <div>
        <p>{`${product.title} - R$${product.price}`}</p>
        <img src="" alt="" />
        <h3>Especificações Técnicas</h3>
        <ul>
          <li>s</li>
        </ul>
      </div>
    );
  }
}

export default ProductDetail;
