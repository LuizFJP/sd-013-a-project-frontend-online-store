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

  async handleSubmit(event) {
    event.preventDefault();
    const { product } = this.state;
    await Api.getProductsFromCategoryAndQuery('', product)
      .then((data) => this.setState({ result: data.results }));
  }

  handleChange({ target }) {
    this.setState({ product: target.value });
  }

  ifNotResult = () => (
    <p data-testid="home-initial-message">
      Digite algum termo de pesquisa ou escolha uma categoria.
    </p>
  );

  ifResult = () => {
    const { result } = this.state;
    return (result.map((res) => (
      <li data-testid="product" key={ res.id }>
        <h2>{res.title}</h2>
        <img src={ res.thumbnail } alt={ res.title } />
        <span>{res.price}</span>
      </li>)));
  }

  render() {
    const { product } = this.state;
    const { ifResult, ifNotResult } = this;
    return (
      <div>
        <form>
          <input
            type="text"
            data-testid="query-input"
            value={ product }
            onChange={ this.handleChange }
          />
          <button type="button" data-testid="query-button" onClick={ this.handleSubmit }>
            Pesquisar
          </button>
        </form>
        { !product ? ifNotResult() : ifResult() }
      </div>
    );
  }
}

export default SearchBar;

// feito pelo grupo via pair programming
