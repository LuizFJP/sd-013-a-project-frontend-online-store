import React, { Component } from 'react';
import { getCategories } from '../services/api';

class Categorias extends Component {
  constructor() {
    super();

    this.state = {
      categorias: [],
    };
  }

  componentDidMount() {
    this.setCategorias();
  }

  setCategorias = async () => {
    const categoriasJson = await getCategories();
    this.setState({ categorias: categoriasJson });
  }

  render() {
    const { categorias } = this.state;
    return (
      <div>
        <ul>
          {categorias
            .map(({ name, id }) => <li data-testid="category" key={ id }>{ name }</li>)}
        </ul>
      </div>
    );
  }
}

export default Categorias;
