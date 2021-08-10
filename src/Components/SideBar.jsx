import React from 'react';
import * as Api from '../services/api';

class SideBar extends React.Component {
  constructor() {
    super();

    this.state = {
      categories: [],
    };
  }

  componentDidMount() {
    Api.getCategories().then((data) => this.setState({
      categories: data,
    }));
  }

  render() {
    const { categories } = this.state;
    return (
      <ul>
        {categories.map((category) => (
          <li
            data-testid="category"
            key={ category.id }
          >
            {category.name}
          </li>))}
      </ul>
    );
  }
}

export default SideBar;
// feito pelo grupo via pair programming
