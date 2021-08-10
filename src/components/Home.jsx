import React from 'react';
import { Link } from 'react-router-dom';
import { getCategories } from '../services/api';
import CategoriesList from './CategoriesList';

class Home extends React.Component {
  constructor() {
    super();
    this.state = {
      categories: [],
    };
    this.categories = this.categories.bind(this);
  }

  componentDidMount() {
    this.categories();
  }

  async categories() {
    const categories = await getCategories();
    console.log(categories);
    this.setState({
      categories,
    });
  }

  render() {
    const { categories } = this.state;
    return (
      <div>
        <CategoriesList categories={ categories } />
        <form>
          <label
            type="text"
            data-testid="home-initial-message"
            htmlFor="home-initial-message"
          >
            Digite algum termo de pesquisa ou escolha uma categoria.
            <input
              type="text"
              id="home-initial-message"
            />
          </label>
          <Link
            to="/cart"
            type="button"
            id="cart-button"
            data-testid="shopping-cart-button"
          >
            Cart
          </Link>
        </form>
      </div>
    );
  }
}

export default Home;
