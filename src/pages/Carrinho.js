import React from 'react';
// import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import Produto from '../components/Produto';

class Carrinho extends React.Component {
  render() {
    const { produtos } = this.props;
    const carrinhoVazio = () => (
      <h1 data-testid="shopping-cart-empty-message">Seu carrinho está vazio</h1>
    );

    const mostrarCarrinho = () => (
      produtos.map((produto) => <Produto key={ produto.id } produto={ produto } />)
    );

    return (
      <section>
        { produtos[0] ? mostrarCarrinho() : carrinhoVazio() }
        {/* <Link to="">Finalizar Compra</Link> */}
        <button type="button">Finalizar Compra</button>
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
