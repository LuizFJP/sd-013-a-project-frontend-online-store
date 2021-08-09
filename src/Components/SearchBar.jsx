import React from 'react';
import * as Api from '../services/api';

class SearchBar extends React.Component {
  constructor() {
    super();

    this.state = {
      product: '',
      result: [],
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();
    const { product } = this.state;
    Api.getProductsFromCategoryAndQuery('', product)
      .then((data) => this.setState({ result: data.results }));
  }

  handleChange({ target }) {
    this.setState({ product: target.value });
  }

  render() {
    const { product, result } = this.state;
    if (!result) {
      return (
        <p data-testid="home-initial-message">
          Digite algum termo de pesquisa ou escolha uma categoria.
        </p>);
    }

    return (
      <div>
        <form onSubmit={ this.handleSubmit }>
          <input
            type="text"
            data-testid="query-input"
            value={ product }
            onChange={ this.handleChange }
          />
          <button type="button" data-testid="query-button">
            Pesquisar
          </button>
        </form>

        {result.map((res) => (
          <li data-testid="product" key={ res.id }>
            <h2>{res.title}</h2>
            <img src={ res.thumbnail } alt={ res.title } />
            <span>{res.price}</span>
          </li>))}
      </div>
    );
  }
}

export default SearchBar;

// feito pelo grupo via pair programming
