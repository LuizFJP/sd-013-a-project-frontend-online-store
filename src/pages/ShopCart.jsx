import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { getLocalStorageData } from '../services/localStorage';

export default class ShopCart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
    };
  }

  componentDidMount() {
    this.getShoppingList();
  }

  getShoppingList = () => {
    const keys = Object.keys(localStorage);
    const products = keys.map((key) => getLocalStorageData(key));
    this.setState({
      items: products,
    });
  };

  render() {
    const { items } = this.state;
    return (
      <>
        {items
          ? items.map((el, index) => (
            <div key={ index }>
              <h1 data-testid="shopping-cart-product-name">{ el.title }</h1>
              <img src={ el.thumbnail } alt="" />
            </div>
          ))
          : <p data-testid="shopping-cart-empty-message">Seu carrinho está vazio</p> }
        <Link to="/">Voltar</Link>
      </>
    );
  }
}
