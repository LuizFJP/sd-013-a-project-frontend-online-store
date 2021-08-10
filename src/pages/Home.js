import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Category from '../components/Category';

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputValue: '',
      categoria: '',
      noSearch: true,
      products: [],
      inCart: 0,
    };
  }

  render() {
    return (
      <div>
        <input />
        <p data-testid="home-initial-message">
          Digite algum termo de pesquisa ou escolha uma categoria.
        </p>

        <Link to="/Cart" data-testid="shopping-cart-button">Carrinho de Compras</Link>
        <Category />
      </div>
    );
  }
}

export default Main;
