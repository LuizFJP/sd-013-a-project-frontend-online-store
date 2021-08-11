import React from 'react';
import PropTypes from 'prop-types';
import { setLocalStorageData } from '../services/localStorage';

export default class AddProduct extends React.Component {
  handleClick = () => {
    const { data } = this.props;
    // console.log(data);
    setLocalStorageData(data);
  }

  render() {
    const { testId } = this.props;

    return (
      <div>
        <button
          type="button"
          data-testid={ testId }
          onClick={ () => this.handleClick() }
        >
          Adicione ao carrinho
        </button>
      </div>
    );
  }
}

const { arrayOf, string } = PropTypes;

AddProduct.propTypes = {
  data: arrayOf,
  testId: string,
}.isRequired;
