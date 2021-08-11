import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { getLocalStorageData } from '../services/localStorage';
import CartItem from '../components/CartItem';

export default class ShopCart extends Component {
  componentDidMount() {
    this.getShoppingList();
  }

  getShoppingList = () => {
    const keys = Object.keys(localStorage);
    const emptyMessage = (
      <p
        data-testid="shopping-cart-empty-message"
      >
        Seu carrinho está vazio
      </p>);
    const products = keys.map((key) => getLocalStorageData(key));
    // console.log(products);
    const cart = products.map((product) => (
      <CartItem
        key={ product[0].id }
        product={ product[0] }
        quantity={ product.length }
      />
    ));

    return products.length !== 0 ? cart : emptyMessage;
  };

  render() {
    return (
      <div>
        <ul>
          { this.getShoppingList() }
        </ul>
        <Link to="/">Voltar</Link>
      </div>
    );
  }
}
