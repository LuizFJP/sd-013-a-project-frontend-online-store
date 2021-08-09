import React from 'react';
import { Link } from 'react-router-dom';
import imgCarShop from '../image/shopping-cart_icon-icons.com_60593.svg';
// Rodrigo Pova, Luiz Furtado, Filipe Cândido, Felipe Chagas, Danilo Uehara
class Home extends React.Component {
  render() {
    return (
      <div>
        <label htmlFor="input-search" data-testid="home-initial-message">
          Digite algum termo de pesquisa ou escolha uma categoria.
          <input id="input-search" type="text" />
        </label>
        <Link data-testid="shopping-cart-button" to="/carshop">
          <img src={ imgCarShop } alt="carrinho de compras" />
        </Link>
      </div>
    );
  }
}

export default Home;
