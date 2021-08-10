import React from 'react';
import CategoriesList from '../components/CategoriesList';
import ButtonCart from '../components/ButtonCart';

class Home extends React.Component {
  render() {
    return (
      <div>
        <ButtonCart />
        <p data-testid="home-initial-message">
          Digite algum termo de pesquisa ou escolha uma categoria.
        </p>
        <CategoriesList />
      </div>
    );
  }
}

export default Home;
