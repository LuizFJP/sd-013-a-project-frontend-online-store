import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class ProductCard extends Component {
  render() {
    const { product } = this.props;
    const { id, title, thumbnail, price } = product;

    return (

      <div className="product-card" data-testid="product">
        <Link
          data-testid="product-detail-link"
          to={ {
            pathname: `/product-details/${id}`,
            state: product,
          } }
        >
          <h2>{ title }</h2>
          <img src={ thumbnail } alt="Product Thumbnail" />
          <span>
            { `Preço R$ ${price}` }
          </span>
        </Link>
        <button
          type="button"
          data-testid="product-detail-add-to-cart"
          onClick={ {/* <funcao-a-ser-desenvolvida-em-outra-tarefa> */} }
        >
          Adicionar ao Carrinho
        </button>
      </div>
    );
  }
}

export default ProductCard;
