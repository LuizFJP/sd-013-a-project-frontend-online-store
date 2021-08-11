import React from 'react';
import { getCategories } from '../services/api';

class Categories extends React.Component {
  constructor() {
    super();

    this.state = {
      categories: [],
    };

    this.showCategories = this.showCategories.bind(this);
    this.componentDidMount = this.componentDidMount.bind(this);
  }

  componentDidMount() {
    this.showCategories();
  }

  async showCategories() {
    const { selectCategory } = this.props;
    const json = await getCategories();
    const categories = json.map(({ name, id }) => (
      <label data-testid="category" key={ id } htmlFor={ name }>
        <input
          type="radio"
          id={ name }
          value={ id }
          name="categories"
          onClick={ selectCategory }
        />
        {name}
      </label>
    ));
    this.setState({ categories });

    console.log(categories);
  }

  render() {
    const { categories } = this.state;
    return (
      <div>
        { categories }
      </div>
    );
  }
}

export default Categories;
