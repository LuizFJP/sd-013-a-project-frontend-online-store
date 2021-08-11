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
    const { handleClick, categoryId, handleCategoryId } = this.props;
    return (
      <div>
        { categories.map((category) => (
          <button
            type="button"
            key={ category.id }
            data-testid="category"
            onClick={ handleClick }
          >
            { category.name }
          </button>
        )) }
      </div>
    );
  }
}

export default CategoriesList;
