import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ProductCard from './ProductCard';

class ListProducts extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cart: [],
    };
  }


  render() {
    // Recebe a props de Produtos listados do filtro Categorias do componente Home
    const { products } = this.props;
    return (
      <section>
        <div className="card-container">
          {/* <h4>Lista de Produtos</h4> */}
          {products.map((produto) => (
            <ProductCard
              key={ produto.id }
              produto={ produto }
              setCart={ this.setCart }
            />
          ))}
        </div>
      </section>
    );
  }
}

ListProducts.propTypes = {
  products: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default ListProducts;
