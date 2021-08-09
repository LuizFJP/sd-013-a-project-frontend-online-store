import React from 'react';
import { Link } from 'react-router-dom';

class Home extends React.Component {
  render() {
    return (
      <div>
        <form>
          <label htmlFor="text" data-testid="home-initial-message">
            <input id="text" />
            Digite algum termo de pesquisa ou escolha uma categoria.
          </label>
          <Link to="/shoppingcart" data-testid="shopping-cart-button">Carrinho</Link>
        </form>
      </div>
    );
  }
}

export default Home;
