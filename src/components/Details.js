import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { Review } from './index';

class Details extends Component {
  constructor(props) {
    super(props);

    this.state = {
      product: {},
      loading: true,
    };
  }

  componentDidMount() {
    this.fetchProduct();
  }

  fetchProduct = async () => {
    const { match: { params: { id } } } = this.props;
    const url = `https://api.mercadolibre.com/items/${id}`;
    const response = await fetch(url);
    const details = await response.json();
    this.setState({
      product: details,
      loading: false,
    });
  }

  render() {
    const { product, loading } = this.state;
    if (loading) return <div>Carregando...</div>;

    return (
      <div>
        <div>
          <span data-testid="product-detail-name">{ product.title }</span>
          <img src={ product.thumbnail } alt="product details" />
          <span>{ product.price }</span>
          <h4>Especificações Técnicas</h4>
          <Link
            to="/shoppingcart"
          >
            <button type="button">
              Adicione no Carrinho
              <span>🛒</span>
            </button>
          </Link>
          <Link
            to="/"
          >
            <button type="button">
              Voltar
            </button>
          </Link>
        </div>
        <Review id={ product.id } />
      </div>
    );
  }
}

Details.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string,
    }),
  }).isRequired,
};

export default Details;
