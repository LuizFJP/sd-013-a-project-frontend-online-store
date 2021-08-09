import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { getCategories } from '../services/api';

export default class CategoriesList extends Component {
  constructor() {
    super();
    this.state = {
      categories: [],
    };
  }

  componentDidMount() {
    this.fetchApi();
  }

  async fetchApi() {
    const data = await getCategories();
    console.log(data);
    this.setState({ categories: data });
  }

  render() {
    const { categories } = this.state;

    return (
      <ul>
        {categories.map((category) => (
          <NavLink
            key={ category.id }
            to={ `/${category.name}` }
            activeClassName="selected"
          >
            <li data-testid="category">
              {category.name}
            </li>
          </NavLink>
        ))}
      </ul>
    );
  }
}
