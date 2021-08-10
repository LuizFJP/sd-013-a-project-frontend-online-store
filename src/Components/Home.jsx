import React from 'react';
import { Link } from 'react-router-dom';
import SearchBar from './SearchBar';

class Home extends React.Component {
  render() {
    return (
      <div>
        <SearchBar />
        <Link to="/cart" data-testid="shopping-cart-button">link pra ShoppingCart</Link>

      </div>
    );
  }
}

export default Home;
