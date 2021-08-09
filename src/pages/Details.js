import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import * as api from '../services/api';
import CartButton from '../components/CartButton';

class Details extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      product: {},
      description: '',
    };
  }

  componentDidMount() {
    this.GetDetails();
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
    const { loading, product, description } = this.state;
    const { title, thumbnail, price } = product;
    return (
      <div>
        <header>
          <Link to="/">Voltar</Link>
          <CartButton />
        </header>
        {!loading && (
          <div>
            <div>
              <span data-testid="product-detail-name">{ title }</span>
              <img src={ thumbnail } alt={ title } />
              <span>
                R$
                { price.toFixed(2) }
              </span>
            </div>
            <div>
              <p>{ description }</p>
            </div>
          </div>
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
