import React from 'react';
import List from './List';

class Home extends React.Component {
  render() {
    return (
      <div>
        <List />
        <form>
          <label htmlFor="text" data-testid="home-initial-message">
            <input id="text" />
            Digite algum termo de pesquisa ou escolha uma categoria.
          </label>
        </form>
      </div>
    );
  }
}

export default Home;
