import React, { Component } from 'react';
import { SearchInput, Categories, ButtonCart } from '../components';

class Main extends Component {
  render() {
    return (
      <main>
        <header>
          <SearchInput />
          <ButtonCart />
        </header>
        <aside>
          <Categories />
        </aside>
      </main>
    );
  }
}

export default Main;
