import React from 'react';
import ButtonCart from '../Components/ButtonCart';
import Categories from '../Components/Categories';
import ProductList from '../Components/ProductList';
import SearchBar from '../Components/SearchBar';

class Home extends React.Component {
  render() {
    return (
      <div>
        <SearchBar />
        <ButtonCart />
        <Categories />
        <ProductList />
      </div>
    );
  }
}

export default Home;
