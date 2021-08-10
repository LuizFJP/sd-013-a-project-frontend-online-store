import React, { Component } from 'react';
import { getCategories } from '../services/api';

class Categories extends Component {
  constructor() {
    super();

    this.state = {
      categories: [],
    };
  }

  componentDidMount() {
    this.setCategories();
  }

  setCategories = async () => {
    const categoriesJson = await getCategories();
    this.setState({ categories: categoriesJson });
  }

  render() {
    const { categories } = this.state;
    return (
      <div>
        <ul>
          {categories
            .map(({ name, id }) => <li data-testid="category" key={ id }>{ name }</li>)}
        </ul>
      </div>
    );
  }
}

export default Categories;
