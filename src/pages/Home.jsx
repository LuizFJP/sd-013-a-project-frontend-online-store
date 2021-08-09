import React from 'react';
import Categories from './Categories';
// Rodrigo Pova, Luiz Furtado, Filipe Cândido, Felipe Chagas, Danilo Uehara
class Home extends React.Component {
  render() {
    return (
      <div>
        <Categories />
        <label htmlFor="input-search" data-testid="home-initial-message">
          Digite algum termo de pesquisa ou escolha uma categoria.
          <input id="input-search" type="text" />
        </label>
      </div>
    );
  }
}

export default Home;
