import React, { Component } from 'react';

class Cart extends Component {
  retrieveLocalStorage = () => {
    if (!localStorage.cart) {
      return (
        <div>
          <span data-testid="shopping-cart-empty-message">Seu carrinho está vazio</span>
        </div>
      );
    }

    const cart = JSON.parse(localStorage.cart);
    return cart.map(({ id, title, price, quantity }) => (
      <div key={ id }>
        <span data-testid="shopping-cart-product-name">{title}</span>
        <span>{price}</span>
        <span data-testid="shopping-cart-product-quantity">{quantity}</span>
      </div>
    ));
  }

  render() {
    return (this.retrieveLocalStorage());
  }
}
export default Cart;
