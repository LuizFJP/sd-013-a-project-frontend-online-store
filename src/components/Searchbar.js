import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Searchbar extends Component {
  render() {
    const { textoSearchbar, handleChange } = this.props;
    return (
      <div>
        <input
          type="text"
          name="searchbarText"
          value={ textoSearchbar }
          onChange={ handleChange }
        />
      </div>
    );
  }
}

Searchbar.propTypes = {
  textoSearchbar: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
};

export default Searchbar;
