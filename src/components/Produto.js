import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Produto extends Component {
  constructor() {
    super();

    this.state = {
      quantidade: 1,
    };
  }

  removerProduto = ({ target }) => {
    target.parentElement.remove();
  }

  gerenciarQuantidade = ({ target: { id } }) => {
    if (id === 'diminuir') {
      this.setState(({ quantidade }) => ({
        quantidade: quantidade - 1,
      }), () => {
        const { quantidade } = this.state;
        return quantidade <= 1 ? this.setState({ quantidade: 1 }) : null;
      });
    } else {
      this.setState(({ quantidade }) => ({
        quantidade: quantidade + 1,
      }));
    }
  }

  render() {
    const { produto: { title, thumbnail, price } } = this.props;
    const { quantidade } = this.state;

    return (
      <div>
        <button
          type="button"
          id="remover"
          onClick={ this.removerProduto }
        >
          X
        </button>
        <p data-testid="shopping-cart-product-name">{ title }</p>
        <img src={ thumbnail } alt={ title } />
        <p>{ price }</p>
        <div>
          <button
            data-testid="product-decrease-quantity"
            type="button"
            id="diminuir"
            onClick={ this.gerenciarQuantidade }
          >
            -
          </button>
          <p data-testid="shopping-cart-product-quantity">{ quantidade }</p>
          <button
            data-testid="product-increase-quantity"
            type="button"
            id="aumentar"
            onClick={ this.gerenciarQuantidade }
          >
            +
          </button>
        </div>
      </div>
    );
  }
}

Produto.propTypes = {
  produto: PropTypes.shape({
    id: PropTypes.string,
    title: PropTypes.string,
    thumbnail: PropTypes.string,
    price: PropTypes.number,
  }).isRequired,
};

export default Produto;
