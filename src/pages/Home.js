import React, { Component } from 'react';

import { Link } from 'react-router-dom';
import Categorias from './Categorias';

class Home extends Component {
  render() {
    return (
      <main>
        <input
          type="text"
          className="campo-de-busca"
        />
        <Link to="/carrinho" data-testid="shopping-cart-button">Carrinho</Link>
        <p
          data-testid="home-initial-message"
        >
          Digite algum termo de pesquisa ou escolha uma categoria.
        </p>
        <div>
          <Categorias />
        </div>
      </main>
    );
  }
}

export default Home;
