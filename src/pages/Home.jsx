import React, { Component } from 'react';
import Categories from '../components/Categories';
import '../style.css/home.css';

export default class Home extends Component {
  render() {
    return (
      <div>
        <header><h1>Mockado Livre</h1></header>
        <input className="searchBar" type="text" />
        <p data-testid="home-initial-message">
          Digite algum termo de pesquisa ou escolha uma categoria.
        </p>
        <Categories />
      </div>
    );
  }
}
