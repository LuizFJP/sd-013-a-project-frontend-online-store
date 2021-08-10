import React, { Component } from 'react';
import { getCategories } from '../../services/api';

export default class Categories extends Component {
  constructor(props) {
    super(props);

    this.state = {
      categories: [],
    };

    this.listCategories = this.listCategories.bind(this);
  }

  componentDidMount() {
    this.listCategories();
  }

  async listCategories() {
    const fetchCategories = await getCategories();
    const mappedCategories = fetchCategories.map(({ id, name }) => (
      <div key={ id } data-testid="category">
        <input type="radio" value={ name } />
        <span>{ name }</span>
      </div>
    ));

    this.setState({
      categories: mappedCategories,
    });
  }

  render() {
    const { categories } = this.state;
    return (
      <div>
        {categories}
      </div>
    );
  }
}
