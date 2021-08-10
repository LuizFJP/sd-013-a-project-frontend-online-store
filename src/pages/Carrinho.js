import React from 'react';

class Carrinho extends React.Component {
  renderProduto = ({ id, title, thumbnail, price }) => {
    return (
      <li key={ id }>
        <p data-testid="shopping-cart-product-name">{ title }</p>
        <p data-testid="shopping-cart-product-quantity">1</p>
      </li>
    );
  }

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

export default Carrinho;
