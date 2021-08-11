import React from 'react';
import Categories from './Categories';
import SearchBar from './SearchBar';
import ShoppingCart from './ShoppingCart';

class Home extends React.Component {
  render() {
    return (
      <div>
        <SearchBar />
        <Categories />
        <ShoppingCart />
      </div>
    );
  }
}

export default Home;
