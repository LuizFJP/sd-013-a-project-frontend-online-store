import React from 'react';
import Categories from './Categories';
import SearchBar from './SearchBar';

class Home extends React.Component {
  render() {
    return (
      <div>
        <SearchBar />
        <Categories />
      </div>
    );
  }
}

export default Home;
