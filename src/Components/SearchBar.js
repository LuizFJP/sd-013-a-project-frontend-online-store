import React from 'react';
import ProductList from './ProductList';
import { GrFormSearch } from 'react-icons/gr'
import * as api from '../services/api'

class SearchBar extends React.Component {
  constructor() {
    super();

    this.state = {
      inputText: '',
      products:[]
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  handleChange({ target }) {
    const { value } = target;
    this.setState({
      inputText: value,
    });
  }

  async handleClick() {
    const { inputText } = this.state;
    const request = await api.getProductsFromCategoryAndQuery('', inputText);
    this.setState({
      products: [request.results]
    })
  }

  render() {
    const { inputText } = this.state;
    return (
      <div>
        <label data-testid="home-initial-message" htmlFor="initial-message">
          Digite algum termo de pesquisa ou escolha uma categoria.
          <input
            type="text"
            id="initial-message"
            data-testid="query-input"
            value= {inputText}
            onChange={ this.handleChange }
          />
          <button
          type="button"
          data-testid="query-button"
          onClick={() => this.handleClick}
          >
          <GrFormSearch />
          </button>
        </label>
      </div>
    );
  }
}

export default SearchBar;
