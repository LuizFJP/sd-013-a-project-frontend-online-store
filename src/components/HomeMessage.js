import React from 'react';
import { Link } from 'react-router-dom';

class HomeMessage extends React.Component {
  render() {
    return (
      <div className="App">
        <label htmlFor="input" data-testid="home-initial-message">
          <input id="input" />
          Digite algum termo de pesquisa ou escolha uma categoria.
        </label>
        <Link to="/cart" data-testid="shopping-cart-button">Cart</Link>
      </div>
    );
  }
}

export default HomeMessage;
