import React from 'react';
import { ButtonAddCart, ProductList, CategoriesList, SeachBar } from '../components';

class Home extends React.Component {
  render() {
    return (
      <div>
        <CategoriesList />
        <ButtonAddCart />
        <SeachBar />
        <ProductList />
      </div>
    );
  }
}

export default Home;
