import React, { Component } from 'react';
import Categories from './categories';

export default class InputSearch extends Component {
  render() {
    return (
      <div>
        <p
          data-testid="home-initial-message"
        >
          Digite algum termo de pesquisa ou escolha uma categoria.
        </p>
        <ul
          data-testid="category"
          className="category"
        >
          <Categories />
        </ul>
        <input type="text" />
      </div>
    );
  }
}
