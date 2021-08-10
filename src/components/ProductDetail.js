import React from 'react';
import PropTypes from 'prop-types';
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
        <span data-testid="product-detail-name">{`${title}`}</span>
        <span>{` - R$${price}`}</span>
        <img src={ thumbnail } alt="" />
        <h3>Especificações Técnicas</h3>
        <ul>
          <li>d</li>
        </ul>
      </div>
    );
  }
}

ProductDetail.propTypes = {
  location: PropTypes.shape({
    state: PropTypes.string,
  }).isRequired,
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string,
    }).isRequired,
  }).isRequired,
};

export default ProductDetail;
