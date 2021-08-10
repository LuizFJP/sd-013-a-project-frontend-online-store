import React, { Component } from 'react';
import PropTypes from 'prop-types';
import * as api from '../services/api';


class List extends Component {
  constructor(props) {
    super(props);

    this.state = {
      list: [],
      loading: true,
    };
  }

  componentDidMount() {
    this.fetchCat();
  }

  fetchCat = async () => {
    const { callback } = this.props;
    const json = await api.getCategories();
    const products = json
      .map(({ id, name }) => (
        <li
          data-testid="category"
          onClick={ () => callback(id) }
          aria-hidden="true"
          key={ id }
        >
          { name }
        </li>
      ));
    this.setState({ list: products, loading: false });
  }

  render() {
    const { list, loading } = this.state;
    if (loading) return <div>Carregando...</div>;
    return (
      <div>
        <ul>
          { list }
        </ul>
      </div>
    );
  }
}

List.propTypes = {
  callback: PropTypes.func.isRequired,
};

export default List;
