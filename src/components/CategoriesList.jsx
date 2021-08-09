import React from 'react';
import * as api from '../services/api';

class CategoriesList extends React.Component {
  constructor() {
    super();

    this.state = {
      categories: [],
    };
  }

  componentDidMount() {
    this.getCategories();
  }

  async getCategories() {
    const data = await api.getCategories();

    this.setState({
      categories: data,
    });
  }

  render() {
    const { categories } = this.state;
    return (
      <div>
        <ul>
          { categories.map((category) => (
            <li key={ category.id } data-testid="category">
              { category.name }
            </li>
          )) }
        </ul>
      </div>
    );
  }
}

export default CategoriesList;
