import React, { Component } from 'react';
import { SearchInput, Categories, ButtonCart, CardItem, Message } from '../components';
import * as api from '../services/api';

class Main extends Component {
  constructor() {
    super();

    this.state = {
      products: [],
      message: true,
    };
  }

  fetchList = async (categoryId, search) => {
    try {
      const productsList = await api.getProductsFromCategoryAndQuery(categoryId, search);
      const result = await productsList.results;
      this.setState({
        products: result,
        message: false,
      });
    } catch (error) {
      this.setState({
        products: [],
      });
    }
  }

  sendToApp = (objProduct) => {
    const { callBack } = this.props;
    callBack(objProduct);
    console.log(objProduct, "main");
  };

  render() {
    const { products, message } = this.state;
    if (!products) return <p>Nenhum produto foi encontrado</p>;

    return (
      <main>
        <header>
          <SearchInput fetch={ this.fetchList } />
          <ButtonCart />
        </header>
        <aside>
          <Categories />
        </aside>
        <section>
          { message
            ? <Message />
            : (products.map((product) => (
              <CardItem
                key={ product.id }
                card={ product }
                sendToMain={ this.sendToApp }
              />)))}
        </section>
      </main>
    );
  }
}

export default Main;
