import React from 'react';
// import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
// import classes from '../pages/Home.module.css';

export default class Home extends React.Component {
  render() {
    const { onSearch } = this.props;
    return (
      <form>
        <input
          type="text"
          data-testid="query-input"
          placeholder="Digite sua busca"
        />
        <button
          data-testid="query-button"
          type="submit"
          onClick={ onSearch }
        >
          Buscar
        </button>
      </form>
    );
  }
}

Home.propTypes = {
  onSearch: PropTypes.func,
}.isRequired;
