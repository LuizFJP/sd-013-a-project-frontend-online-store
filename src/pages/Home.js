import React, { Component } from 'react';
import CartButton from '../components/CartButton';
import Categories from '../components/Categories';
import './Home.css';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <Categories />
        <main className="home-main">
          <header className="home-header">
            <input type="text" />
            <button type="button">
              <span role="img" aria-label="lupa">🔎</span>
            </button>
            <CartButton />
          </header>
          <div>
            <span data-testid="home-initial-message">
              Digite algum termo de pesquisa ou escolha uma categoria.
            </span>
          </div>
        </main>
      </div>
    );
  }
}

export default Home;
