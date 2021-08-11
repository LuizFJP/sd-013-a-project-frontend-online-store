import React from 'react';
import { Link } from 'react-router-dom';

class CarShop extends React.Component {
  render() {
    return (
      <div className="test">
        <h1 data-testid="shopping-cart-empty-message">Seu carrinho está vazio</h1>
        <Link to="/">Voltar</Link>
      </div>
    );
  }
}

export default CarShop;
