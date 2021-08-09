import React, { Component } from 'react';

class Home extends Component {
  render() {
    return (
      <header>
        <input
          className="search-field"
          type="text"
          name="search-field"
          id="search-field"
          placeholder="Digite aqui"
        />
        <p data-testid="home-initial-message">
          Digite algum termo de pesquisa ou escolha uma categoria.
        </p>
      </header>
    );
  }
}

export default Home;
