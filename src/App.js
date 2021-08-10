import React from 'react';
import { getProductsFromCategoryAndQuery } from './services/api';
import Body from './components/Body';
import './App.css';

class App extends React.Component {
  componentDidMount() {
    getProductsFromCategoryAndQuery('MLB1132', 'molho de tomate');
  }

  render() {
    return (
      <div className="App">
        <Body />
      </div>
    );
  }
}

export default App;
