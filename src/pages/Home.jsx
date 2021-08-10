import React from 'react';
import ButtonAddCart from '../components/ButtonAddCart';
import CategoriesList from '../components/CategoriesList';
import ProductList from '../components/ProductList';

class Home extends React.Component {
  render() {
    return (
      <div>
        <CategoriesList />
        <ButtonAddCart />
        <label htmlFor="input-search">
          <input
            type="text"
            name="input-search"
            placeholder="Digite o nome do produto"
          />
        </label>
        <p
          data-testid="home-initial-message"
        >
          Digite algum termo de pesquisa ou escolha uma categoria.
        </p>
        <ProductList />
      </div>
    );
  }
}

export default Home;
