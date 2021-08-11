import React, { Component } from 'react';
import PropTypes from 'prop-types';

class CategorieButton extends Component {
  render() {
    const { categorie, handleSelectedCategory } = this.props
    return (
      <div data-testid="category" onClick={ handleSelectedCategory }>
        { categorie.name }
      </div>
    );
  }
}

CategorieButton.propTypes = {

};

export default CategorieButton;