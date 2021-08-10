import React, { Component } from 'react';
import PropTypes from 'prop-types';
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
    // console.log(data);
    this.setState({ categories: data });
  }

  render() {
    const { categories } = this.state;
    const { onClick } = this.props;

    return (
      <aside className={ classes.asideContainer }>
        {categories.map((category) => (
          <div
            key={ category.id }
            className={ classes.navLink }
          >
            <label htmlFor="category">
              <input
                type="radio"
                name="category"
                value={ category.id }
                data-testid="category"
                onClick={ ({ target: { value } }) => onClick(value) }
              />
              { category.name }
            </label>
          </div>
        ))}
      </aside>
    );
  }
}

CategoriesList.propTypes = {
  onClick: PropTypes.func,
}.isRequired;
