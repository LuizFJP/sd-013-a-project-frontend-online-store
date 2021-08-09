import React from 'react';

class SearchBar extends React.Component {
  render() {
    return (
      <div>
        <label data-testid="home-initial-message" htmlFor="initial-message">
          Digite algum termo de pesquisa ou escolha uma categoria.
          <input type="text" id="initial-message" />
        </label>
      </div>
    );
  }
}

export default SearchBar;
