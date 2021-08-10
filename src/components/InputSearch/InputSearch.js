import React, { Component } from 'react';
import Categories from '../Categories/Categories';

export default class InputSearch extends Component {
  render() {
    return (
      <div>
        <p
          data-testid="home-initial-message"
        >
          Digite algum termo de pesquisa ou escolha uma categoria.
        </p>
        <Categories />
        <input type="text" />
      </div>
    );
  }
}
