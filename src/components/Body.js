import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Searchbar from './Searchbar';

class Body extends Component {
  constructor() {
    super();
    this.state = {
      searchbarText: '',
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange({ target }) {
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;

    this.setState({
      [name]: value,
    });
  }

  render() {
    const { searchbarText } = this.state;
    return (
      <div>
        <Link
          data-testid="shopping-cart-button"
          to="/shopping-cart"
        >
          Carrinho de compras
        </Link>
        <Searchbar textoSearchbar={ searchbarText } handleChange={ this.handleChange } />
        <h3 data-testid="home-initial-message">
          Digite algum termo de pesquisa ou escolha uma categoria.
        </h3>
        <div>
          {}
        </div>
      </div>
    );
  }
}

export default Body;
