import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { SearchInput, Categories, ButtonCart, CardItem, Message } from '../components';
import * as api from '../services/api';

class Main extends Component {
  constructor() {
    super();

    this.state = {
      products: [],
      message: true,
      search: '',
    };
  }

  fetchList = async (categoryId, search) => {
    try {
      const productsList = await api.getProductsFromCategoryAndQuery(categoryId, search);
      const result = await productsList.results;
      this.setState({
        products: result,
        message: false,
        search,
      });
      console.log(categoryId);
    } catch (error) {
      this.setState({
        products: [],
      });
    }
  }

  render() {
    const { products, message, search } = this.state;
    if (!products) return <p>Nenhum produto foi encontrado</p>;

    return (
      <main>
        <header>
          <SearchInput fetch={ this.fetchList } />
          <ButtonCart />
        </header>
        <aside>
          <Categories fetch={ this.fetchList } />
        </aside>
        <section>
          { message
            ? <Message />
            : (products.map((product) => (
              <div key={ product.id }>
                <CardItem card={ product } />
                <Link
                  to={ { pathname: `/product/${product.id}`, state: search } }
                  data-testid="product-detail-link"
                >
                  MAIS INFORMAÇÕES
                </Link>
              </div>)))}
        </section>
      </main>
    );
  }
}

export default Main;
