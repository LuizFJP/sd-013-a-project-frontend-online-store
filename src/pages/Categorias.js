import React, { Component } from 'react';
import PropTypes from 'prop-types';
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
    console.log(categoriasJson);
    this.setState({ categorias: categoriasJson });
  }

  render() {
    const { categorias } = this.state;
    const { atualizaCategoriaId } = this.props;
    return (
      <div>
        <ul>
          {categorias
            .map(({ name, id }) => (
              <button
                type="button"
                onClick={ atualizaCategoriaId }
                data-testid="category"
                key={ id }
                id={ id }
              >
                { name }
              </button>
            ))}
        </ul>
      </div>
    );
  }
}

Categorias.propTypes = {
  atualizaCategoriaId: PropTypes.func.isRequired,
};

export default Categorias;
