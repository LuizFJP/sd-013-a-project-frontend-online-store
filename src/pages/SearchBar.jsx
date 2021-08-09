import React from 'react';
class SearchBar extends React.Component {
  handleFormSubmit = (e) => {
    e.preventDefault();
    const { onSubmit } = this.props;
    onSubmit();
    //pode ocorrer bug de permanecer somente true
  }

  render() {
    const { onChange } = this.props;
    return (
      <form onSubmit={ this.handleFormSubmit }>
        <label htmlFor="input-search" data-testid="home-initial-message">
          Digite algum termo de pesquisa ou escolha uma categoria.
          <input data-testid="query-input" id="input-search" type="text" onChange={ onChange } />
        </label>
        <button type="submit" data-testid="query-button">Pesquisar</button>
      </form>

    );
  }
}

export default SearchBar;
