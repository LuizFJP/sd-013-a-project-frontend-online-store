import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

class Produtos extends React.Component {
  renderProduto = (produto) => {
    const { id, title, thumbnail, price } = produto;
    const { gestorDoCarrinho, guardaProdutoClicado } = this.props;

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
        <Link
          to={ `/produto/${id}` }
          onClick={ () => guardaProdutoClicado(produto) }
          data-testid="product-detail-link"
        >
          Ver Detalhes
        </Link>
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
  gestorDoCarrinho: PropTypes.func.isRequired,
  guardaProdutoClicado: PropTypes.func.isRequired,
};

export default Produtos;
