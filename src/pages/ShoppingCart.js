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
  }

  shouldComponentUpdate() {
    this.checkState();
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
    const { emptyItems } = this.state;
    return (
      <div>
        {emptyItems && <EmptyCart />}
      </div>
    );
  }
}

export default ShoppingCart;
