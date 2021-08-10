import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import imgCarShop from '../image/shopping-cart_icon-icons.com_60593.svg';

class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      query: '',
    };
  }

  handleChange = ({ target }) => {
    const { value } = target;
    this.setState({ query: value });
  }

  handleFormSubmit = (e) => {
    e.preventDefault();
    const { onClick } = this.props;
    const { query } = this.state;
    onClick(query);
  }

  render() {
    return (
      <form onSubmit={ this.handleFormSubmit }>
        <label htmlFor="input-search" data-testid="home-initial-message">
          Digite algum termo de pesquisa ou escolha uma categoria.
          <input
            data-testid="query-input"
            id="input-search"
            type="text"
            onChange={ this.handleChange }
          />
        </label>
        <button type="submit" data-testid="query-button">Pesquisar</button>
        <Link data-testid="shopping-cart-button" to="/carshop">
          <img src={ imgCarShop } alt="carrinho de compras" />
        </Link>
      </form>
    );
  }
}

SearchBar.propTypes = {
  onClick: PropTypes.func.isRequired,
};
export default SearchBar;
