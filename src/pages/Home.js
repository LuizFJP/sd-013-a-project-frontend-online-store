import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import CategoriesFilter from '../components/Category';

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputValue: '',
      categoria: '',
      noSearch: true,
      products: [],
      inCart: 0,
    };
  }

  handleChangeCategory = ({ target }) => {
    const { value } = target;
    const { categoria } = this.state;
    this.setState({
      categoria: value,
    }, async () => {
      if (categoria) {
        const requisicao = await api.getProductsFromCategoryAndQuery(categoria, false);
        const produtos = requisicao.results;
        this.setState({
          products: [...produtos],
          noSearch: false,
        });
      }
    });
  }

  render() {
    const { inputValue, inCart, noSearch } = this.state;

    return (
      <div>
        <input />
        <p data-testid="home-initial-message">
          Digite algum termo de pesquisa ou escolha uma categoria.
        </p>

        <Link to="/Cart" data-testid="shopping-cart-button">Carrinho de Compras</Link>
        <CategoriesFilter onClick={ this.handleChangeCategory } />
      </div>
    );
  }
}

export default Main;
