import React from 'react';
import PropTypes from 'prop-types';

class SearchBar extends React.Component {
  constructor() {
    super();

    this.state = {
      product: '',
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange({ target }) {
    this.setState({ product: target.value });
  }

  render() {
    const { alterarEstado } = this.props;
    const { product } = this.state;
    return (
      <div>
        <form>
          <input
            type="text"
            data-testid="query-input"
            value={ product }
            onChange={ this.handleChange }
          />
          <button
            type="button"
            data-testid="query-button"
            onClick={ () => alterarEstado(product) }
          >
            Pesquisar
          </button>
        </form>

      </div>
    );
  }
}

SearchBar.propTypes = {
  alterarEstado: PropTypes.func.isRequired,
};

export default SearchBar;

// feito pelo grupo via pair programming
