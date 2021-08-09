import React from 'react';

class SearchBar extends React.Component {
  render() {
    return (
      <form>
        <label htmlFor="search-bar-input" data-testid="home-initial-message">
          <input type="text" className="search-bar-input" />
          Digite algum termo de pesquisa ou escolha uma categoria.
        </label>
      </form>
    );
  }
}

export default SearchBar;
