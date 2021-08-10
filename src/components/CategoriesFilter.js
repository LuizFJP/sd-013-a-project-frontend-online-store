import React, { Component } from 'react';
import PropTypes from 'prop-types';
import * as api from '../services/api';

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
      categorias: [...requisicao],
    });
  }

  render() {
    const { categorias } = this.state;
    const { onChange } = this.props;

    return (
      <aside>
        <ol>
          Categorias:
          {
            categorias.map((category) => (
              <li key={ category.id } data-testid="category">
                <input
                  type="radio"
                  id={ category.name }
                  name="categoria"
                  value={ category.id }
                  onChange={ onChange }
                />
                {category.name}
              </li>))
          }
        </ol>
      </aside>
    );
  }
}

CategoriesFilter.propTypes = ({
  onClick: PropTypes.func,
}).isRequired;

export default CategoriesFilter;
