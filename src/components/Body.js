import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Searchbar from './Searchbar';
import { getCategories, getProductsFromCategoryAndQuery } from '../services/api';
import CategorieButton from './CategorieButton';
import ProductCard from './ProductCard';

class Body extends Component {
  constructor() {
    super();
    this.state = {
      searchbarText: '',
      categories: [],
      storeItems: [],
      selectedCategory: false,
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.handleSelectedCategory = this.handleSelectedCategory.bind(this);
  }

  componentDidMount() {
    getCategories().then((r) => this.setState({
      categories: r,
    }));
  }

  handleChange({ target }) {
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    this.setState({
      [name]: value,
    });
  }

  handleSelectedCategory({ target }) {
    this.setState({
      selectedCategory:target.id,
    })
  }

  handleClick() {
    const { searchbarText, selectedCategory } = this.state;
    getProductsFromCategoryAndQuery(selectedCategory, searchbarText)
      .then((r) => {
        this.setState({ storeItems: r.results });
      });
  }

  render() {
    const { searchbarText, categories, storeItems } = this.state;
    return (
      <div>
        <Link
          data-testid="shopping-cart-button"
          to="/shopping-cart"
        >
          Carrinho de compras
        </Link>
        <Searchbar textoSearchbar={ searchbarText } handleChange={ this.handleChange } handleClick={ this.handleClick } />
        <h3 data-testid="home-initial-message">
          Digite algum termo de pesquisa ou escolha uma categoria.
        </h3>
        <div>
          { categories
            .map((categorie) => <CategorieButton key={ categorie.name } id={ categorie.id }
              categorie={ categorie }
            />)}
        </div>
        <div>
          { storeItems
            .map((item) => <ProductCard key={ item.title } id={ item.id } onClick={ this.handleSelectedCategory }
              item={ item }
            />)}
        </div>
      </div>
    );
  }
}

export default Body;
