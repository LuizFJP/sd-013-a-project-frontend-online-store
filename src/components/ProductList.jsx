import React from 'react';
import { ProductItem } from '.';

class ProductList extends React.Component {
  render() {
    const { products } = this.props;
    // if (!found) return <p>Nenhum produto foi encontrado</p>;
    return (
      <div>
        <p
          data-testid="home-initial-message"
        >
          Digite algum termo de pesquisa ou escolha uma categoria.
        </p>
        <div>
          {products.map((product) => (
            <ProductItem product={ product } key={ product.id } data-testid="product" />
          ))}
        </div>
      </div>
    );
  }
}
// Salewski, Vanessa Rios e o Manu.
export default ProductList;
