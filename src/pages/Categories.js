import React from 'react';
import { Link } from 'react-router-dom';
import { getCategories } from '../services/api';
// Rodrigo Pova

class Categories extends React.Component {
  constructor(props) {
    super(props);
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

  handleClick = ({ target }) => {
    const { onClick } = this.props;
    const id = target.getAttribute('category');
    onClick('', id);
  }

  render() {
    const { categories } = this.state;
    return (
      <ul>
        {categories.map((category) => (
          <li key={ category.id } data-testid="category">
            <Link
              onClick={ this.handleClick }
              category={ category.id }
              to={ `/${category.id}` }
            >
              {category.name}
            </Link>
          </li>))}
      </ul>
    );
  }
}

export default Categories;
