import React from 'react';

class HomeMessage extends React.Component {
  render() {
    return (
      <div className="App">
        <label htmlFor="input" data-testid="home-initial-message">
          <input id="input" />
          Digite algum termo de pesquisa ou escolha uma categoria.
        </label>
      </div>
    );
  }
}

export default HomeMessage;
