import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { getCategories } from '../services/api';
// Rodrigo Pova, Luiz Furtado

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
      <section className="category">
        {categories.map((category) => (
          <div
            tabIndex="0"
            role="button"
            onClick={ this.handleClick }
            onKeyDown={ this.handleClick }
            key={ category.id }
            data-testid="category"
            className="category-items"
          >
            <Link
              category={ category.id }
              to={ `/${category.id}` }
              className="link"
            >
              {category.name}
            </Link>
          </div>))}
      </section>
    );
  }
}

Categories.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default Categories;
