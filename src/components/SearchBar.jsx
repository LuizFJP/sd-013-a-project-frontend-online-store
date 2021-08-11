import React from 'react';
import PropTypes from 'prop-types';

class SearchBar extends React.Component {
  render() {
    const { query, handleQuery, handleSubmit } = this.props;
    return (
      <form onSubmit={ handleSubmit }>
        <label htmlFor="Product-Search">
          <input
            type="text"
            data-testid="query-input"
            name="Product-Search"
            placeholder="Digite o nome do produto"
            value={ query }
            onChange={ handleQuery }
          />
          <button
            type="submit"
            data-testid="query-button"
            name="Product-Search"
          >
            Buscar:
          </button>
        </label>
      </form>
    );
  }
}

SearchBar.propTypes = {
  query: PropTypes.string,
  handleQuery: PropTypes.func,
  handleSubmit: PropTypes.func,
}.isRequired;

export default SearchBar;
