import React from 'react';
import * as API from '../services/api';

class ListByCategory extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      category: '',
    };
  }

  componentDidMount() {
    this.fetchByCategory();
  }

  fetchByCategory = async () => {
    const { match: { params: { category } } } = this.props;
    const request = await API.getProductsFromCategoryAndQuery(category, '');
    this.setState({
      category: request,
    });
  }

  render() {
    const { category } = this.state;
    return (
      <p>
        Em desenvolvimento
        {category}
      </p>
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
