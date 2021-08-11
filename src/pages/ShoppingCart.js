import React, { Component } from 'react';
import EmptyCart from '../components/EmptyCart';

class ShoppingCart extends Component {
  constructor(props) {
    super(props);

    this.state = {
      emptyItems: true,
      items: [],
    };
    this.checkState = this.checkState.bind(this);
    this.getCartFromLocalStorage = this.getCartFromLocalStorage.bind(this);
  }

  componentDidMount() {
    this.getCartFromLocalStorage();
  }

  shouldComponentUpdate() {
    this.checkState();
    return true;
  }

  getCartFromLocalStorage() {
    const items = JSON.parse(localStorage.getItem('shoppingCart'));
    this.setState({
      items,
    });
  }

  checkState() {
    const { items } = this.state;
    const EMPTY_SHOPPING_CART = 0;
    if (items.length > EMPTY_SHOPPING_CART) {
      this.setState({
        emptyItems: false,
      });
    }
  }

  render() {
    const { emptyItems, items } = this.state;
    return (
      <div>
        {emptyItems && <EmptyCart />}
        {items.length !== 0 && items.map((item) => {
          const { qnt, object: { title, thumbnail, price }, id } = item;
          return (
            <div key={ id }>
              <img src={ thumbnail } alt={ id } />
              <p data-testid="shopping-cart-product-name">{ title }</p>
              <p data-testid="shopping-cart-product-quantity">{ qnt }</p>
              <p>{ price }</p>
              <p>{ id }</p>
            </div>
          );
        })}
      </div>
    );
  }
}

export default ShoppingCart;
