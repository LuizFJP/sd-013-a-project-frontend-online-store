import React, { Component } from 'react';
import PropTypes from 'prop-types';
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
    const { handleChange } = this.props;
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
              name="category"
              id="category-item"
              value={ id }
              onChange={ handleChange }
            />
            { name }
          </label>
        ))}
      </div>
    );
  }
}

Categories.propTypes = {
  handleChange: PropTypes.func.isRequired,
};

export default Categories;
