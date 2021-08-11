import React, { Component } from 'react';
import PropTypes from 'prop-types';
import * as api from '../services/api';

class ProductDetails extends Component {
  constructor(props) {
    super(props);

    this.state = {
      product: {},
      description: '',
    };
    this.getProduct = this.getProduct.bind(this);
    this.getDescription = this.getDescription.bind(this);
  }

  async componentDidMount() {
    this.getProduct();
    this.getDescription();
  }

  async getProduct() {
    const { location: { state } } = this.props;
    const { match: { params: { id } } } = this.props;
    const list = await api.getProductsFromCategoryAndQuery('', state);
    const product = list.results.find((item) => item.id === id);
    this.setState({
      product,
    });
    console.log(product);
  }

  async getDescription() {
    const { match: { params: { id } } } = this.props;
    const description = await (await fetch(`https://api.mercadolibre.com/items/${id}/description`)).json();
    this.setState({
      description: description.plain_text,
    });
  }

  render() {
    const { product, description } = this.state;
    const { title, thumbnail, price } = product;

    return (
      <section>
        <div>
          <img src={ thumbnail } alt={ title } />
          <div>
            <h2 data-testid="product-detail-name">{ title }</h2>
            <h2>
              R$
              { price }
            </h2>
          </div>
        </div>
        <div>{ description }</div>
      </section>
    );
  }
}

ProductDetails.propTypes = {
  location: PropTypes.shape({
    state: PropTypes.string,
  }).isRequired,
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string,
    }),
  }).isRequired,
};

export default ProductDetails;
