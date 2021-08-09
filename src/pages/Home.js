import React, { Component } from 'react';
import CartButton from '../components/CartButton';
import Categories from '../components/Categories';
import ProductCard from '../components/ProductCard';
import * as api from '../services/api';
import './Home.css';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedCat: undefined,
      itemList: undefined,
    };
  }

  fetchApi = async () => {
    const { selectedCat } = this.state;
    const searchedProduct = document.querySelector('.search-bar').value;
    const json = await api.getProductsFromCategoryAndQuery(selectedCat, searchedProduct);

    const list = json.results.map((item) => (
      <ProductCard
        key={ item.id }
        item={ item }
        selCat={ selectedCat }
        query={ searchedProduct }
      />
    ));

    if (list.length === 0) {
      this.setState({ itemList: <span>Nenhum produto foi encontrado</span> });
    } else {
      this.setState({ itemList: list });
    }
  }

  render() {
    const { itemList } = this.state;
    return (
      <div>
        <Categories />
        <main className="home-main">
          <header className="home-header">
            <input className="search-bar" type="text" data-testid="query-input" />
            <button data-testid="query-button" onClick={ this.fetchApi } type="button">
              <span role="img" aria-label="lupa">🔎</span>
            </button>
            <CartButton />
          </header>
          <div>
            { !itemList ? (
              <span data-testid="home-initial-message">
                Digite algum termo de pesquisa ou escolha uma categoria.
              </span>)
              : itemList}
          </div>
        </main>
      </div>
    );
  }
}

export default Home;
