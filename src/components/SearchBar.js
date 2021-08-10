import React from 'react';

class SearchBar extends React.Component {
  render() {
    return (
      <div>
        <input
          type="text"
          placeholder="Digite sua busca"
        />
        <span
          data-testid="home-initial-message"
        >
          Digite algum termo de pesquisa ou escolha uma categoria.
        </span>
      </div>
    );
  }
}

export default SearchBar;
