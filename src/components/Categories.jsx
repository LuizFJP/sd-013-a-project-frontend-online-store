import React, { Component } from 'react';
import PropTypes from 'prop-types';
import * as api from '../services/api';
import './components.css';

class Categories extends Component {
  constructor() {
    super();

    this.state = {
      categories: [],
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
      <div className="buttons">
        { categories.map((category) => (
          <button
            className="button"
            type="button"
            onClick={ () => fetch(category.id) }
            onKeyDown={ () => fetch(category.id) }
            data-testid="category"
            key={ category.id }
          >
            {category.name}
          </button>
        ))}
      </div>
    );
  }
}

Categories.propTypes = {
  fetch: PropTypes.func.isRequired,
};

export default Categories;
