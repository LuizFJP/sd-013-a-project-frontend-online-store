import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Searchbar extends Component {
  render() {
    const { textoSearchbar, handleChange, handleClick } = this.props;
    return (
      <div>
        <input
          type="text"
          name="searchbarText"
          value={ textoSearchbar }
          onChange={ handleChange }
          data-testid="query-input"
        />
        <button
          type="button"
          data-testid="query-button"
          onClick={ () => handleClick() }
        >
          Buscar
        </button>
      </div>
    );
  }
}

Searchbar.propTypes = {
  textoSearchbar: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
};

export default Searchbar;
