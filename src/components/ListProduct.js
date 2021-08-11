import React from 'react';
import { PropTypes } from 'prop-types';
import Product from './Product';
// Agradecimentos ao Josue por me ajudar com 
// a lógica de renderização condicional. - Janovicci

class ListProduct extends React.Component {
  render() {
    const { produtos } = this.props;
    const paragrafo = <p>Nenhum produto foi encontrado</p>;
    const divMap = (
      produtos.map((card) => <Product key={ card.id } dados={ card } />)
    );
    return (
      produtos.length === 0 ? paragrafo : divMap
    );
  }
}

ListProduct.propTypes = {
  produtos: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string,
    thumbnail: PropTypes.string,
    price: PropTypes.number,
  })).isRequired,
};

export default ListProduct;
