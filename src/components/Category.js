import React, { Component } from 'react';
import * as api from '../services/api';

class Category extends Component {
  constructor(props) {
    super(props);

    this.state = {
      categorias: [],
    };
  }

  fetchCategory = async () => {
    const requisicao = await api.getCategories()
    this.setState({
      categorias: [...requisicao],
    })
  }

  componentDidMount() {
    this.fetchCategory();
  }

  render() {

    const { categorias } = this.state;

    return (
      <aside>
        <ul>
          Categorias:
          {
            categorias.map((category) => (
            <li key={category.id} data-testid="category">
              {category.name}
            </li>))}
        </ul>
      </aside>
    );
  }
}

export default Category;