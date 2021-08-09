import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import CardsList from '../components/CardsList';
import Categories from '../components/Categories';

class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      searchField: '',
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    const { target: { name, value } } = event;

    this.setState({
      [name]: value,
    })
  }

  render() {
    const { searchField } = this.state;
    return (
      <>
        <header>
          <input
            className="searchField"
            type="text"
            name="searchField"
            id="searchField"
            placeholder="Digite aqui"
            onChange={ this.handleChange }
          />
          <p data-testid="home-initial-message">
            Digite algum termo de pesquisa ou escolha uma categoria.
          </p>
          <Link to="/shopping-cart" data-testid="shopping-cart-button">Cart</Link>
        </header>
        <Categories />
        <CardsList searchField={ searchField } />
      </>
    );
  }
}

export default Home;
