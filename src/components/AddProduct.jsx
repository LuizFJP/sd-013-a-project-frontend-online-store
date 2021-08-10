import React from 'react';
import PropTypes from 'prop-types';
import { setLocalStorageData } from '../services/localStorage';

export default class AddProduct extends React.Component {
  handleClick = () => {
    const { data } = this.props;
    console.log(data);
    setLocalStorageData(data);
  }

  render() {
    return (
      <div>
        <button
          type="button"
          data-testid="product-add-to-cart"
          onClick={ () => this.handleClick() }
        >
          Adicione ao carrinho
        </button>
      </div>
    );
  }
}

AddProduct.propTypes = {
  data: PropTypes.arrayOf,
}.isRequired;
