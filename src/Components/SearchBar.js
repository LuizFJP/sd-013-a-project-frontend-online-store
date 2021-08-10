import React from 'react';
import ButtonCart from './ButtonCart';
import * as api from '../services/api';

class SearchBar extends React.Component {
  constructor() {
    super();

    this.state = {
      categories: [],
    };
  }

  componentDidMount() {
    api.getCategories().then((category) => this.setState({
      categories: category,
    }));
  }

  handleChange({ target }) {
    const { name, value } = target;
    this.setState({
      [name]: value,
    });
  }

  render() {
    const { categories } = this.state;
    return (
      <div>
        <label data-testid="home-initial-message" htmlFor="initial-message">
          Digite algum termo de pesquisa ou escolha uma categoria.
          <input
            type="text"
            id="initial-message"
            data-testid="query-input"
            nome="searchText"
            value={ value }
            onChange={ handleChange }
          />
        </label>
        <button
          type="button"
          data-testid="query-button"
        >
          Pesquisar
        </button>
        <div>
          <ButtonCart />
        </div>
        <nav>
          <ul>
            { categories.map((category) => (
              <li key={ category.id } data-testid="category">
                {category.name}
              </li>))}
          </ul>
        </nav>
      </div>
    );
  }
}

export default SearchBar;
