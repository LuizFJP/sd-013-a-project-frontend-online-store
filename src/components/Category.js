import React from 'react';
import PropTypes from 'prop-types';

class Category extends React.Component {
  render() {
    const { data, onClick } = this.props;
    return (
      <li data-testid="category">
        <button type="submit" onClick={ onClick }>{data}</button>
      </li>
    );
  }
}

Category.propTypes = {
  data: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default Category;
