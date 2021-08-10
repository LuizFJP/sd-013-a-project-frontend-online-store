import React from 'react';
import Button from '../Components/Button';
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

  render() {
    const { categories } = this.state;
    return (
      <div>
        <label data-testid="home-initial-message" htmlFor="initial-message">
          Digite algum termo de pesquisa ou escolha uma categoria.
          <input type="text" id="initial-message" />
        </label>

        <div>
          <Button />
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
