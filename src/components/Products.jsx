import React, { Component } from 'react';
import * as api from '../services/api';
import Category from './Category';
import ProductDetails from './ProductDetails';

export default class Products extends Component {
  constructor(props) {
    super(props);

    this.state = {
      products: [],
      query: '',
      category: '',
      details: false,
      idDetails: '',
    };

    this.handleOnChange = this.handleOnChange.bind(this);
    this.Products = this.Products.bind(this);
    this.handleOnClick = this.handleOnClick.bind(this);
    this.handleLiClick = this.handleLiClick.bind(this);
    this.handleCard = this.handleCard.bind(this);
  }

  handleCard({ target }) {
    this.setState({ details: true, idDetails: target.id });
  }

  handleOnChange(e) {
    this.setState({ query: e.target.value });
  }

  async handleLiClick(e) {
    const { query, category } = this.state;
    await this.setState({ category: e.target.id, query: '' });
    this.Products(category, query);
  }

  handleOnClick() {
    const { query, category } = this.state;
    this.Products(category, query);
  }

  async Products() {
    const { query, category } = this.state;
    await api.getProductsFromCategoryAndQuery(category, query)
      .then((products) => { this.setState({ products: products.results }); });
    // console.log(query);
    // console.log(category);
  }

  render() {
    const { products, details, idDetails } = this.state;
    const productId = products.find((product) => product.id === idDetails);
    const renderProductId = (details) ? (<ProductDetails
      product={ productId }
    />) : undefined;
    return (
      <div>
        <Category onClick={ this.handleLiClick } />
        <div className="Products">
          <input
            type="text"
            name=""
            id=""
            onChange={ this.handleOnChange }
            data-testid="query-input"
          />
          <button
            type="button"
            onClick={ this.handleOnClick }
            data-testid="query-button"
          >
            Pesquisar

          </button>
          <h1>Produtos</h1>
          <div>
            { products.map((product) => (
              <div key={ product.id } data-testid="product">
                <h3>{ product.title }</h3>
                <img
                  alt={ product.id }
                  src={ product.thumbnail }
                />
                <p>{ product.price }</p>
                <button
                  data-testid="product-detail-link"
                  id={ product.id }
                  type="button"
                  onClick={ this.handleCard }
                >
                  Detalhes
                  {' '}
                </button>
              </div>))}
          </div>
          { renderProductId }
        </div>
      </div>
    );
  }
}
