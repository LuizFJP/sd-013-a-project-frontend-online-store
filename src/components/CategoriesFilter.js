import React, { Component } from 'react';
import PropTypes from 'prop-types';
import * as api from '../services/api';
import './categoriesFilter.css';

class CategoriesFilter extends Component {
  constructor(props) {
    super(props);

    this.state = {
      categorias: [],
    };
  }

  componentDidMount() {
    this.fetchCategory();
  }

  fetchCategory = async () => {
    const requisicao = await api.getCategories();
    this.setState({
      categorias: requisicao,
    });
  }

  render() {
    const { categorias } = this.state;
    const { onChange } = this.props;

    return (
      <aside className="asideFilter">
        <p>Categorias:</p>
        <nav className="asideNav">
          {
            categorias.map((category) => (
              <label htmlFor={ category.name } key={ category.id }>
                <input
                  // Agradeço ao meu amigo Josué por me ajudar a validar este requisito
                  data-testid="category"
                  type="radio"
                  id={ category.name }
                  name="categoria"
                  value={ category.id }
                  onChange={ onChange }
                />
                {category.name}
              </label>
            ))
          }
        </nav>
      </aside>
    );
  }
}

CategoriesFilter.propTypes = ({
  onChange: PropTypes.func,
}).isRequired;

export default CategoriesFilter;
