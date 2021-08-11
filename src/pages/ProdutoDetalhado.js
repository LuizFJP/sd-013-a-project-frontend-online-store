import React, { Component } from 'react';
import PropTypes from 'prop-types';

class ProdutoDetalhado extends Component {
  render() {
    const { produto: { title, thumbnail, price } } = this.props;

    return (
      <section>
        <h1 data-testid="product-detail-name">{ title }</h1>
        <img src={ thumbnail } alt={ title } />
        <p>{ price }</p>
      </section>
    );
  }
}

ProdutoDetalhado.propTypes = {
  produto: PropTypes.shape({
    id: PropTypes.string,
    title: PropTypes.string,
    thumbnail: PropTypes.string,
    price: PropTypes.number,
  }).isRequired,
};

export default ProdutoDetalhado;
