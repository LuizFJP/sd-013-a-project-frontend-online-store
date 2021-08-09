import React from 'react';
import * as api from '../services/api';
import Card from './Card';

class CardsList extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      filteredProducts: [],
    };
    this.fetchProducts = this.fetchProducts.bind(this);
  }

  async fetchProducts() {
    const { searchField } = this.props;
    const filteredProducts = await api.getProductsFromCategoryAndQuery('', searchField);

    this.setState({
      filteredProducts,
    });
  }

  async componentDidMount() {
    this.fetchProducts()
  }

  render() {
    const { filteredProducts } = this.state;
    console.log(filteredProducts);
    return(
      <div>
        { filteredProducts.map((product) => (<Card component={ product } />)) }
      </div>
    );
  }
}

export default CardsList;
