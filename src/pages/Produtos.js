import React from 'react';
import PropTypes from 'prop-types';

class Produtos extends React.Component {
  renderProduto = ({ id, title, thumbnail, price }) => (
    <li key={ id } data-testid="product">
      <p>{ title }</p>
      <img src={ thumbnail } alt={ title } />
      <p>{ price }</p>
    </li>
  );

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
