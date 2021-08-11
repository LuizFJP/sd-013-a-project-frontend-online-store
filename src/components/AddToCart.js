import React, { Component } from 'react';
import PropTypes from 'prop-types';

class AddToCart extends Component {
    handleClick = () => {
      const { product } = this.props;
      const produto = {
        title: product.title,
        thumbnail: product.thumbnail,
        price: product.price,
        id: product.id,
        cartQuantity: 1,
      };
      this.addToCart(produto);
    }

    addToCart = (produto) => {
      let listaCompras = JSON.parse(localStorage.getItem('shoppingCart') || '[]');
      const [localProduct, product] = this.productExists(listaCompras, produto);

      if (localProduct) {
        product.cartQuantity += 1;
        localStorage.setItem('shoppingCart', JSON.stringify(listaCompras));
      } else {
        listaCompras = [...listaCompras, product];
        localStorage.setItem('shoppingCart', JSON.stringify(listaCompras));
      }
    }

    productExists = (listaCompras, produto) => {
      const productFound = listaCompras.find((item) => item.id === produto.id);
      if (!productFound) return [false, produto];
      return [true, productFound];
    }

    render() {
      const { dataTestId } = this.props;

      return (
        <div>
          <button
            type="button"
            data-testid={ dataTestId }
            onClick={ () => this.handleClick() }
          >
            Adicionar ao Carrinho
          </button>
        </div>
      );
    }
}

AddToCart.propTypes = {
  product: PropTypes.shape({}),
  dataTestId: PropTypes.string,
}.isRequired;

export default AddToCart;
