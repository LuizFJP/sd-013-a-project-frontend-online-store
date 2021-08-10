import React from 'react';
import { Link } from 'react-router-dom';
import ProductCard from './ProductCard';

class CarShop extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { location: { state: { carrinho } } } = this.props;
    console.log(carrinho);
    if (!carrinho) {
      return (
        <div>
          <h1 data-testid="shopping-cart-empty-message">Seu carrinho está vazio</h1>

        </div>
      );
    }
    return (
      <div>
        { carrinho.map((product) => <ProductCard key={ product.id } product={ product } />) }
        <Link to="/">Voltar</Link>
      </div>

    );
  }
}

export default CarShop;
