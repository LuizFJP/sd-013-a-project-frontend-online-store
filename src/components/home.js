import React from 'react';

class Home extends React.Component {
  render() {
    return (
      <form>
        <label htmlFor="text" data-testid="home-initial-message">
          <input id="text" />
          Digite algum termo de pesquisa ou escolha uma categoria.
        </label>
      </form>
    );
  }
}

export default Home;
