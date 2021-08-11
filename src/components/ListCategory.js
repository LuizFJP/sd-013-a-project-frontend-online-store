import React from 'react';
import PropTypes from 'prop-types';
import * as Api from '../services/api';
import Category from './Category';

class ListCategory extends React.Component {
  constructor() {
    super();
    this.state = {
      categorys: [],
    };
  }

  componentDidMount() {
    this.requestApi();
  }

  async requestApi() {
    const api = (await Api.getCategories());
    this.setState({
      categorys: api,
    });
  }

  render() {
    const { categorys } = this.state;
    const { onClick } = this.props;
    return (
      <div className="container-categoryJr">
        <ul>
          {categorys.map((cat) => (<Category
            id={ cat.id }
            onClick={ onClick }
            key={ cat.id }
            name={ cat.name }
          />))}
        </ul>
      </div>
    );
  }
}

ListCategory.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default ListCategory;
