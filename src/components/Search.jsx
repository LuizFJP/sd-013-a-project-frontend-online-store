import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Home extends Component {
  render() {
    const { onClick, onChange, query } = this.props;
    return (
      <form>
        <input
          type="text"
          data-testid="query-input"
          placeholder="Digite sua busca"
          value={ query }
          onChange={ onChange }
        />
        <button
          data-testid="query-button"
          type="submit"
          onClick={ onClick }
        >
          Buscar
        </button>
      </form>
    );
  }
}

const { func, string } = PropTypes;

Home.propTypes = {
  onClick: func,
  onChange: func,
  query: string,
}.isRequired;
