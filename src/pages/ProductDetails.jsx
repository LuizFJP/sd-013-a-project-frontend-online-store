import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import ShoppingCartButton from '../components/ShoppingCartButton';
import AddProduct from '../components/AddProduct';

export default class ProductDetails extends React.Component {
  constructor(props) {
    super(props);
    const { match, location } = this.props;
    const { params } = match;
    const { state } = location;
    this.state = {
      id: params.id,
      product: '',
      dataApi: state,
    };
  }

  componentDidMount() {
    this.fetchData();
  }

  fetchData = async () => {
    const { id } = this.state;
    const response = await fetch(`https://api.mercadolibre.com/items/${id}/description?api_version=2`);
    const result = await response.json();
    this.setState({
      product: result,
    });
  }

  render() {
    const { dataApi, product } = this.state;
    const { data } = dataApi;
    const { title, price, thumbnail } = data;
    return (
      <main>
        <header>
          <Link to="/">Voltar</Link>
          <ShoppingCartButton />
        </header>
        <section>
          <h1 data-testid="product-detail-name">{ title }</h1>
          <h2>{ `R$${parseFloat(price).toFixed(2)}` }</h2>
          <img src={ thumbnail } alt={ `foto ${title}` } width="100" />
          <div>
            <h3>Especificações Técnicas</h3>
            <p>{product.plain_text}</p>
          </div>
          <AddProduct data={ data } testId="product-detail-add-to-cart" />
        </section>
      </main>
    );
  }
}

const { shape, string } = PropTypes;

ProductDetails.propTypes = {
  match: shape({
    params: string,
  }),
  location: shape({
    state: shape({
      data: shape({
        title: string,
      }),
    }),
  }),
}.isRequired;
