import React, { Component } from 'react';
import * as api from '../services/api';

class Categories extends Component {
  constructor() {
    super();
    this.state = {
      loading: true,
      categories: [],
    };
  }

  componentDidMount() {
    this.fetchCategories();
  }

  fetchCategories = async () => {
    const json = await api.getCategories();
    const categories = json.map(({ name, id }) => (
      <label data-testid="category" key={ id } htmlFor={ name }>
        <input type="radio" id={ name } value={ id } name="categories" />
        {name}
      </label>
    ));
    this.setState({ loading: false, categories });
  }

  render() {
    const { loading, categories } = this.state;
    if (loading) return <div>Loading...</div>;
    return (
      <div>
        <span>Categorias</span>
        { categories }
      </div>
    );
  }
}

export default Categories;
