import React from 'react';

export default class Home extends React.Component {
  render() {
    return (
      <h2 data-testid="home-initial-message">
        Digite algum termo de pesquisa ou escolha uma categoria.
      </h2>
    );
  }
}
