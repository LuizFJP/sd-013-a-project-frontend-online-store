import React from 'react';
import PropTypes from 'prop-types';

class Carrinho extends React.Component {
  renderProduto = ({ id, title, thumbnail, price }) => (
    <li key={ id }>
      <p data-testid="shopping-cart-product-name">{ title }</p>
      <img src={ thumbnail } alt={ title } />
      <p data-testid="shopping-cart-product-quantity">1</p>
      <p>{ price }</p>
    </li>
  )

  render() {
    const { produtos } = this.props;

    return (
      <section>
        <h1 data-testid="shopping-cart-empty-message">Seu carrinho está vazio</h1>
        { produtos.map((produto) => this.renderProduto(produto)) }
      </section>
    );
  }
}

Carrinho.propTypes = {
  produtos: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    thumbnail: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
  })).isRequired,
};

export default Carrinho;
