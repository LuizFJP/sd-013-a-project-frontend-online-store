import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import * as api from '../services/api';
import CartButton from '../components/CartButton';
import './Details.css';
import Reviews from '../components/Reviews';

class Details extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      product: {},
      description: '',
      cartQuantity: 0,
    };
  }

  componentDidMount() {
    this.GetDetails();
    this.CartQuantity();
  }

  setLocalStorage = (id, title, price) => {
    const product = { id, title, price, quantity: 1 };

    if (localStorage.cart) {
      const cart = JSON.parse(localStorage.cart);
      const filteredCart = cart.filter((item) => {
        if (item.id === product.id) {
          product.quantity = item.quantity + 1;
          return false;
        }
        return true;
      });
      localStorage.cart = JSON.stringify([...filteredCart, product]);
    } else {
      localStorage.cart = JSON.stringify([product]);
    }
    this.CartQuantity();
  }

  CartQuantity = () => {
    if (!localStorage.cart || localStorage.cart === '[]') return;

    const cart = JSON.parse(localStorage.cart);

    const soma = cart.reduce((acc, { quantity }) => (
      acc + parseFloat(quantity)), 0);

    this.setState({ cartQuantity: soma });
  }

  GetDetails = async () => {
    const { match: { params: { id } },
      location: { state: { selCat, query } } } = this.props;

    const json = await api.getProductsFromCategoryAndQuery(selCat, query);
    const product = json.results.find((item) => item.id === id);
    const description = (await (await fetch(`https://api.mercadolibre.com/items/${id}/description`)).json()).plain_text;
    this.setState({ loading: false, product, description });
  }

  render() {
    const { loading, product, description, cartQuantity } = this.state;
    const { id, title, thumbnail, price } = product;
    return (
      <div className="details-body">
        <header className="details-header">
          <Link to="/">Voltar</Link>
          <CartButton cartQuantity={ cartQuantity } />
        </header>
        {!loading && (
          <>
            <div className="details-outercontainer">
              <div className="details-innercontainer">
                <div className="details-product-info">
                  <span data-testid="product-detail-name">{ title }</span>
                  <img src={ thumbnail } alt={ title } />
                  <span>
                    R$
                    { price.toFixed(2) }
                  </span>
                </div>
                <div className="details-product-description">
                  <p>{ description }</p>
                </div>
              </div>
              <button
                className="details-addToCart-btn"
                data-testid="product-detail-add-to-cart"
                type="button"
                onClick={ () => this.setLocalStorage(id, title, price) }
              >
                Adicionar ao carrinho
              </button>
            </div>
            <Reviews id={ id } />
          </>
        )}
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
  location: PropTypes.shape({
    state: PropTypes.shape({
      selCat: PropTypes.string,
      query: PropTypes.string,
    }),
  }).isRequired,
};

export default Details;
