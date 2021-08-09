import React from 'react';
import ButtonCart from '../components/ButtonCart';

class Home extends React.Component {
  render() {
    return (
      <div>
        <ButtonCart />
        <p data-testid="home-initial-message">
          Digite algum termo de pesquisa ou escolha uma categoria.
        </p>
      </div>
    );
  }
}

export default Home;
