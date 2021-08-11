import React, { Component } from 'react';
import PropTypes from 'prop-types';

class CategorieButton extends Component {
  render() {
    const { categorie } = this.props
    return (
      <div data-testid="category">
        { categorie.name }
      </div>
    );
  }
}

CategorieButton.propTypes = {

};

export default CategorieButton;