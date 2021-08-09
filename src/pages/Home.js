import React, { Component } from 'react';
import CartButton from '../components/CartButton';
import './Home.css';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
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
