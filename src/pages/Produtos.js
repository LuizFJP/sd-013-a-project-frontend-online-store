import React from 'react';
import PropTypes from 'prop-types';

class Produtos extends React.Component {
  constructor() {
    super();

    this.state = {
      carrinho: [],
    };
  }

  addAoCarrinho = (produto) => {
    this.setState((state) => ({ carrinho: [...state.carrinho, produto]}));
  };

  renderProduto = (produto) => {
    const { id, title, thumbnail, price } = produto;
    const { gestorDoCarrinho } = this.props;

    return (
      <li key={ id } data-testid="product">
      <p>{ title }</p>
      <img src={ thumbnail } alt={ title } />
      <p>{ price }</p>
      <button
        type="button"
        data-testid="product-add-to-cart"
        onClick={ () => gestorDoCarrinho(produto) }
      >
        Adicionar ao Carrinho
      </button>
    </li>
    );
  };

  render() {
    const { produtos } = this.props;

    return (
      <ul>
        { produtos.map((produto) => this.renderProduto(produto)) }
      </ul>
    );
  }
}

Produtos.propTypes = {
  produtos: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    thumbnail: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
  })).isRequired,
};

export default Produtos;
