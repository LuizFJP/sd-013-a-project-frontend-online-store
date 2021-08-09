import React from 'react';
import * as api from '../services/api';

export default class Category extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      categories: [],
    };
  }

  componentDidMount() {
    this.Category();
  }

  Category() {
    api.getCategories().then((categories) => { this.setState({ categories }); });
  }

  render() {
    const { categories } = this.state;
    return (
      <div>
        <ul>
          { categories.map((category) => <li data-testid="" key={ category.id }>{category.name}</li>)}
        </ul>
      </div>
    );
  }
}
