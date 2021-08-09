import React, { Component } from 'react';
import * as api from '../services/api';

class Categories extends Component {
  constructor() {
    super();

    this.state = {
      categories: [],
    };
  }

  componentDidMount() {
    console.log('entrou no didmount');
    this.fetchList();
  }

  fetchList = async () => {
    console.log('entrou no fetch');
    const listOfCategories = await api.getCategories();
    console.log(listOfCategories);
    this.setState({
      categories: listOfCategories,
    });
  }

  render() {
    const { categories } = this.state;

    return (
      <ul>
        { categories.map((category) => (
          <li
            data-testid="category"
            key={ category.id }
          >
            {category.name}
          </li>
        ))}
      </ul>
      // <div>
      // <p>Teste</p>

    // {console.log('entrou no render')}
    // </div>
    );
  }
}

export default Categories;
