import React from 'react';
import { Link } from 'react-router-dom';

class Home extends React.Component {
  render() {
    return (
      <div>
        <form>
          <label
            type="text"
            data-testid="home-initial-message"
            htmlFor="home-initial-message"
          >
            Digite algum termo de pesquisa ou escolha uma categoria.
            <input
              type="text"
              id="home-initial-message"
            />
          </label>
          <Link
            to="/cart"
            type="button"
            id="cart-button"
            data-testid="shopping-cart-button"
          >
            Cart
          </Link>
        </form>
      </div>
    );
  }
}

export default Home;
