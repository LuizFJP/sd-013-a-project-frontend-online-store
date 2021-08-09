import React, { Component } from 'react';
import { getCategories, getProductsFromCategoryAndQuery } from './services/api';

export default class App extends Component {
  componentDidMount() {
    getCategories();
    getProductsFromCategoryAndQuery();
  }

  render() {
    return (
      <div>
        <h1>Frontend Online Store</h1>
      </div>
    );
  }
}
