import React from 'react';
import { Link } from 'react-router-dom';
import * as api from '../services/api';
import ProductCard from './ProductCard';
import List from './List';

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectCategory: undefined,
      itemList: undefined,
    };
  }

  fetchApi = async () => {
    const { selectCategory } = this.state;
    console.log(selectCategory);
    const searchProduct = document.querySelector('.search-input').value;
    const json = await api.getProductsFromCategoryAndQuery(selectCategory, searchProduct);

    const list = json.results.map((item) => (
      <ProductCard
        key={ item.id }
        item={ item }
        selCat={ selectCategory }
        query={ searchProduct }
      />
    ));

    if (list.length === 0) {
      this.setState({ itemList: <span>Nenhum produto foi encontrado</span> });
    } else {
      this.setState({ itemList: list });
    }
  }

  searchCategory = async (id) => {
    console.log(id);
    this.setState({
      selectCategory: id,
    });
    this.fetchApi();
  }

  render() {
    const { itemList } = this.state;
    return (
      <div>
        <List callback={ this.searchCategory } />
        <form>
          <label htmlFor="text">
            <input
              id="text"
              className="search-input"
              type="text"
              data-testid="query-input"
            />
            <button data-testid="query-button" onClick={ this.fetchApi } type="button">
              <span>PESQUISAR</span>
            </button>
          </label>
          <Link to="/shoppingcart" data-testid="shopping-cart-button">Carrinho</Link>
        </form>
        { !itemList ? (
          <span data-testid="home-initial-message">
            Digite algum termo de pesquisa ou escolha uma categoria.
          </span>)
          : itemList}
      </div>

    );
  }
}

export default Home;
