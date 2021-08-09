import React from 'react';
import { Link } from 'react-router-dom';
import CategoriesList from '../components/CategoriesList';

export default class Home extends React.Component {
  render() {
    return (
      <main className="home-container">
        <h2 data-testid="home-initial-message">
          Digite algum termo de pesquisa ou escolha uma categoria.
        </h2>
        <Link to="/cart">
          <button data-testid="shopping-cart-button" type="button">Shopping Cart</button>
        </Link>
        <aside>
          <CategoriesList />
        </aside>
      </main>
    );
  }
}
