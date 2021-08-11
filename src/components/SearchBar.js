import React from 'react';
import { Link } from 'react-router-dom';
import cartimg from '../cartimg.png';

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
          <Link
            data-testid="shopping-cart-button"
            to="/shopping-cart"
          >
            <img
              src={ cartimg }
              alt="carrinho de compras"
              className="shopping-cart-button"
            />
          </Link>
        </div>
      </div>
    );
  }
}

export default SearchBar;
