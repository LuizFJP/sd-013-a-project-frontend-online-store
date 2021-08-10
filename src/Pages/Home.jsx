import React from 'react';
import { Link } from 'react-router-dom';

import ProductList from '../Components/ProductList';
import SearchBar from '../Components/SearchBar';
import SideBar from '../Components/SideBar';
import * as Api from '../services/api';

class Home extends React.Component {
  constructor() {
    super();
    this.state = {
      resultadoDoPai: [],
      produto: '',
    };

    this.alterarEstado = this.alterarEstado.bind(this);
    this.filter = this.filter.bind(this);
  }

  async alterarEstado(param1) {
    await Api.getProductsFromCategoryAndQuery('', param1)
      .then((data) => this.setState({
        resultadoDoPai: data.results,
        produto: param1,
      }));
  }

  async filter(param1) {
    const { produto } = this.state;
    await Api.getProductsFromCategoryAndQuery(param1, produto)
      .then((data) => this.setState({
        resultadoDoPai: data.results,
      }));
  }

  render() {
    const { resultadoDoPai, produto } = this.state;
    return (
      <div>
        <SearchBar alterarEstado={ this.alterarEstado } />
        <Link to="/cart" data-testid="shopping-cart-button">Shopping Cart</Link>
        <SideBar filter={ this.filter } />
        <ProductList resultadoDoPai={ resultadoDoPai } produto={ produto } />
      </div>
    );
  }
}

export default Home;
// feito pelo grupo via pair programming
