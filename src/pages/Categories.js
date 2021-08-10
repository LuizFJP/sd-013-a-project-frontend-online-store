import React from 'react';
import { getCategories } from '../services/api';
// Rodrigo Pova

class Categories extends React.Component {
  constructor() {
    super();
    this.state = {
      categories: [],
    };
  }

  componentDidMount() {
    this.updateState();
  }

  updateState = async () => {
    this.setState({
      categories: await getCategories(),
    });
  }

  render() {
    const { categories } = this.state;
    return (
      <ul>
        {categories.map((category) => (
          <li key={ category.id } data-testid="category">
            {category.name}
          </li>))}
      </ul>
    );
  }
}

export default Categories;
