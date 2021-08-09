import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class ShopCart extends Component {
  render() {
    return (
      <>
        <p data-testid="shopping-cart-empty-message">Seu carrinho está vazio</p>
        <Link to="/">Voltar</Link>
      </>
    );
  }
}
