import React from 'react';
import * as api from '../services/api';

class Categories extends React.Component {
  constructor() {
    super();

    this.state = {
      categories: [],
    };
  }

  componentDidMount() {
    api.getCategories().then((data) => this.setState({ categories: data }));
  }

  render() {
    const { categories } = this.state;
    return (
      <aside>
        { categories.map((category) => (
          <div key={ category.id }>
            <label htmlFor="category">
              <input
                type="radio"
                name="category"
                value={ category.id }
                data-testid="category"
              />
              {category.name}
            </label>
          </div>))}
      </aside>
    );
  }
}

export default Categories;
