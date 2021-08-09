import React from 'react';

class Home extends React.Component {
  render() {
    return (
      <label htmlFor="input-search" data-testid="home-initial-message">
        Digite algum termo de pesquisa ou escolha uma categoria.
        <input id="input-search" type="text" />
      </label>
    );
  }
}

export default Home;
