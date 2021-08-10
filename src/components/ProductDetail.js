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
    const {
      location: { state: title },
      match: { params: { id } },
    } = this.props;

    const { results } = await api.getProductsFromCategoryAndQuery('', title);
    const product = results.find((item) => item.id === id);

    this.setState({
      product,
    });
  }

  render() {
    const { product: { title, price, thumbnail } } = this.state;
    return (
      <div>
        <p>{`${title} - R$${price}`}</p>
        <img src={ thumbnail } alt="" />
        <h3>Especificações Técnicas</h3>
        <ul>
          <li>s</li>
        </ul>
      </div>
    );
  }
}

export default ProductDetail;
