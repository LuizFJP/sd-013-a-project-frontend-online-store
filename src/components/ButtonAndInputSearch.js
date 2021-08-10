import React, { Component } from 'react';
import PropTypes from 'prop-types';

class ButtonAndInputSearch extends Component {
  render() {
    const { onChange, onClick } = this.props;
    return (
      <div>
        <input
          data-testid="query-input"
          type="text"
          onChange={ onChange }
        />
        <input
          data-testid="query-button"
          type="button"
          value="search"
          onClick={ onClick }
        />
      </div>
    );
  }
}

ButtonAndInputSearch.propTypes = {
  onChange: PropTypes.func.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default ButtonAndInputSearch;
