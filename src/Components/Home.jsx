import React from 'react';
import { Link } from 'react-router-dom';
import SearchBar from './SearchBar';
import Categories from './Categories';
// import ProductCard from './ProductCard';

class Home extends React.Component {
  render() {
    return (
      <div>
        <SearchBar />
        <Link to="/cart" data-testid="shopping-cart-button">link pra ShoppingCart</Link>
        <Categories />
        {/* <ProductCard /> */}
      </div>
    );
  }
}

export default Home;
