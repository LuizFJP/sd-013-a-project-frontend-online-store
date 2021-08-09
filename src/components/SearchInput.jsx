import React, { Component } from 'react';
import ButtonCart from './ButtonCart';

class SearchInput extends Component {
  render() {
    return (
      <section>
        <input type="text" />
        <ButtonCart />
        <p data-testid="home-initial-message">
          Digite algum termo de pesquisa ou escolha uma categoria.
        </p>
      </section>
    );
  }
}

export default SearchInput;
