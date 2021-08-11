import React from 'react';
import PropTypes from 'prop-types';

class Category extends React.Component {
  render() {
    const { name, id, onClick } = this.props;
    return (
      <li className="category-item">
        <label key={ id } htmlFor={ id }>
          <input
            data-testid="category"
            type="radio"
            name="categoryId"
            id={ id }
            value={ id }
            onClick={ onClick }
          />
          { name }
        </label>
      </li>
    );
  }
}

Category.propTypes = {
  name: PropTypes.string,
  id: PropTypes.string,
}.isRequired;

export default Category;
