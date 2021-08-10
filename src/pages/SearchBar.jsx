import React from 'react';

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
      <form onSubmit={ this.handleFormSubmit }>
        <label htmlFor="input-search" data-testid="home-initial-message">
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

export default SearchBar;
