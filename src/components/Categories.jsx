import React, { Component } from 'react';
import * as api from '../services/api';

class Categories extends Component {
  constructor() {
    super();

    this.state = {
      categories: [],
      search: '',
      categoryId: '',
    };
  }

  componentDidMount() {
    this.fetchList();
  }

  fetchList = async () => {
    const listOfCategories = await api.getCategories();
    this.setState({
      categories: listOfCategories,
    });
  }

  render() {
    const { categories } = this.state;
    const { fetch } = this.props;

    return (
      <ul>
        { categories.map((category) => (
          <li
            onClick={ () => fetch(category.id) }
            data-testid="category"
            key={ category.id }
          >
            {category.name}
          </li>
        ))}
      </ul>
    );
  }
}

export default Categories;
