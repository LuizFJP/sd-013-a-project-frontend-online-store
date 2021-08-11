import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import AddProduct from '../components/AddProduct';
import classes from './Home.module.css';

export default class Products extends Component {
  constructor() {
    super();
    this.productData = this.productData.bind(this);
  }

  message = () => <p>Nenhum produto foi encontrado</p>;

  productData(data) {
    return (
      <div>
        <li key={ data.id } data-testid="product">
          <p>{ data.title }</p>
          <Link
            data-testid="product-detail-link"
            to={ {
              pathname: `/productdata/${data.id}`,
              state: { data },
            } }
          >
            <img src={ data.thumbnail } alt={ `foto ${data.title}` } width="100" />
            <p>{ `R$${parseFloat(data.price).toFixed(2)}` }</p>
          </Link>
          <AddProduct data={ data } testId="product-add-to-cart" />
        </li>
      </div>
    );
  }

  render() {
    const { data, request } = this.props;

    return (
      <div>
        <ul className={ classes.productsContainer }>
          {
            request ? this.message : data.map((detail) => this.productData(detail))
          }
        </ul>
      </div>
    );
  }
}

const { arrayOf, bool } = PropTypes;

Products.propTypes = {
  data: arrayOf,
  request: bool,
}.isRequired;
