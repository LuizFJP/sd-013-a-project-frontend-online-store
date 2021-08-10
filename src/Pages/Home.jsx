import React from 'react';
import { Link } from 'react-router-dom';

import SearchBar from '../Components/SearchBar';
import SideBar from '../Components/SideBar';

class Home extends React.Component {
  render() {
    return (
      <div>
        <SearchBar />
        <Link to="/cart" data-testid="shopping-cart-button">Shopping Cart</Link>
        <SideBar />
      </div>
    );
  }
}

export default Home;
// feito pelo grupo via pair programming
