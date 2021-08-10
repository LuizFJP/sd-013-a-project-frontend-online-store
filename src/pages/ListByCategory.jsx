import React from 'react';
import PropTypes from 'prop-types';
import Home from './Home';
import * as API from '../services/api';

class ListByCategory extends React.Component {
  test = async () => {
    await API.getProductsFromCategoryAndQuery('categoryId', 'query');
  }

  componentDidMount() {
    this.test();
  }

  render() {
    return (
      <Home />
    );
  }
}

ListByCategory.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      category: PropTypes.string,
    }),
  }).isRequired,
};

export default ListByCategory;
