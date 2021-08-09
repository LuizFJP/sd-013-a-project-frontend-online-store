import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { getCategories } from '../services/api';
import classes from '../pages/Home.module.css';

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
      <aside className={ classes.asideContainer }>
        <ul>
          { categories.map((category) => (
            <NavLink
              key={ category.id }
              to={ `/${ category.name }` }
              activeClassName="selected"
              className={ classes.navLink }
            >
              <li data-testid="category">
                { category.name }
              </li>
            </NavLink>
          )) }
        </ul>
      </aside>
    );
  }
}
