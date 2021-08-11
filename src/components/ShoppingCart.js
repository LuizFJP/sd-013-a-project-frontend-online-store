import React from 'react';

class ShoppingCart extends React.Component {
  constructor() {
    super();

    this.state = {
      cart: [],
    };

    this.showCarts = this.showCarts.bind(this);
  }

  componentDidMount() {
    this.showCarts();
  }

  showCarts() {
    const { location : { state : { product : { title, thumbnail, price, available_quantity } } } } = this.props;
    const product = (
      <div data-testid="shopping-cart-product-name">
        <h2>{ title }</h2>
        <img src={ thumbnail } alt="foto do produto" />
        <p>{ price }</p>
        <p data-testid="shopping-cart-product-quantity">{ available_quantity }</p>
      </div>
    );
    this.setState({ cart: product });
  }

  render() {
    const { cart } = this.state;
    return (
      <div>
        <p data-testid="shopping-cart-empty-message">{cart}</p>
      </div>
    );
  }
}

export default ShoppingCart;
