import React from 'react';
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
    return (
      <div>
        {categorys.map((cat) => <Category key={ cat.id } name={ cat.name } />)}
      </div>
    );
  }
}

export default ListCategory;
