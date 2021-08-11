import React from 'react';
import PropTypes from 'prop-types';
import ProductItem from './Product';

class ProductList extends React.Component {
  render() {
    const { products, found } = this.props;
    if (!found) return <p>Nenhum produto foi encontrado</p>;
    if (products.length === 0) {
      return (
        <p data-testid="home-initial-message">
          Digite algum termo de pesquisa ou escolha uma categoria.
        </p>
      );
    }
    return (
      <div>
        <div>
          { products.map((product) => (
            <ProductItem product={ product } key={ product.id } />
          )) }
        </div>
      </div>
    );
  }
}

ProductList.propTypes = {
  products: PropTypes.arrayOf(PropTypes.object),
  found: PropTypes.bool,
}.isRequired;

// Equipe toda empenhada em resolver o quesito 5. Muito obrigado a todos <3!
export default ProductList;
