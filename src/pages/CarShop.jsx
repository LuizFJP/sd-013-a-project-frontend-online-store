import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
// import ProductCard from './ProductCard';

class CarShop extends React.Component {
  // constructor(props) {
  //   super(props);
  // }

  render() {
    const { location: { state: { carrinho } } } = this.props;
    if (!carrinho) {
      return (
        <div>
          <h1 data-testid="shopping-cart-empty-message">Seu carrinho está vazio</h1>

        </div>
      );
    }
    return (
      <ul>
        { carrinho.map((product) => (
          <li data-testid="shopping-cart-product-name" key={ product.id }>
            {product.title}
            <span data-testid="shopping-cart-product-quantity">
              1
            </span>
          </li>
        ))}
        <Link to="/">Voltar</Link>
      </ul>
    );
  }
}

CarShop.propTypes = {
  location: PropTypes.shape({
    state: PropTypes.shape({
      carrinho: PropTypes.arrayOf(PropTypes.object),
    }),
  }).isRequired,
};

export default CarShop;
