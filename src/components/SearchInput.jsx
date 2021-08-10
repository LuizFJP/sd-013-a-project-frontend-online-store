import React, { Component } from 'react';
import PropTypes from 'prop-types';

class SearchInput extends Component {
  constructor() {
    super();
    this.state = {
      search: '',
      categoryId: '',
    };
  }

  handleChange = ({ target: { value } }) => {
    this.setState({
      search: value,
    });
  }

  render() {
    const { search, categoryId } = this.state;
    const { fetch } = this.props;

    return (
      <section>
        <input
          type="text"
          data-testid="query-input"
          value={ search }
          onChange={ this.handleChange }
        />
        <button
          data-testid="query-button"
          type="button"
          onClick={ () => fetch(categoryId, search) }
        >
          Search
        </button>
      </section>
    );
  }
}

SearchInput.propTypes = {
  fetch: PropTypes.func.isRequired,
};

export default SearchInput;
