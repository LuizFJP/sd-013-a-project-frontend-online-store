import React from 'react';
import PropTypes from 'prop-types';
import '../App.css';

class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      query: '',
    };
  }

  handleChange = ({ target }) => {
    const { value } = target;
    this.setState({ query: value });
  }

  handleFormSubmit = (e) => {
    e.preventDefault();
    const { onClick } = this.props;
    const { query } = this.state;
    onClick(query);
  }

  render() {
    return (
      <form onSubmit={ this.handleFormSubmit } className="form-search">
        <label
          htmlFor="input-search"
          data-testid="home-initial-message"
          className="input-search"
        >
          Digite algum termo de pesquisa ou escolha uma categoria.
          <input
            data-testid="query-input"
            id="input-search"
            type="text"
            onChange={ this.handleChange }
          />
        </label>
        <button type="submit" data-testid="query-button">Pesquisar</button>
      </form>

    );
  }
}

SearchBar.propTypes = {
  onClick: PropTypes.func.isRequired,
};
export default SearchBar;
