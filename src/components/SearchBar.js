import React from 'react';
import { Link } from 'react-router-dom';

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
        <div>
          <Link data-testid="shopping-cart-button" to="/shopping-cart">cart</Link>
        </div>
      </div>
    );
  }
}

export default SearchBar;
