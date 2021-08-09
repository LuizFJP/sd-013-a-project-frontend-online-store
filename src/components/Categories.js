import React, { Component } from 'react';
import * as api from '../services/api';

// https://www.valentinog.com/blog/await-react/
class Categories extends Component {
  constructor() {
    super();
    this.state = {
      categories: [],
    };
    this.getCategories = this.getCategories.bind(this);
  }

  componentDidMount() {
    this.getCategories();
  }

  async getCategories() {
    const categories = await api.getCategories();
    this.setState({
      categories,
    });
  }

  render() {
    const { categories } = this.state;
    return (
      <div className="category-bar">
        <p>Categorias:</p>
        {categories.map(({ id, name }) => (
          <label
            key={ id }
            htmlFor="category-item"
            data-testid="category"
            className="category-item"
          >
            <input
              type="radio"
              name="category-item"
              id="category-item"
            />
            { name }
          </label>
        ))}
      </div>
    );
  }
}

export default Categories;
