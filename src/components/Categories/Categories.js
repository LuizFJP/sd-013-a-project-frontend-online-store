import React, { Component } from 'react';
import { getCategories } from '../../services/api';
import ProductList from '../ProductList/ProductList';

export default class Categories extends Component {
  constructor(props) {
    super(props);

    this.state = {
      categories: [],
      selectedCategory: '',
    };

    this.handleRadioChange = this.handleRadioChange.bind(this);
    this.listCategories = this.listCategories.bind(this);
  }

  componentDidMount() {
    this.listCategories();
  }

  async handleRadioChange(e) {
    const { target } = e;
    const { value } = target;

    this.setState({
      selectedCategory: value,
    });
  }

  async listCategories() {
    const fetchCategories = await getCategories();
    this.setState({
      categories: fetchCategories,
    });
  }

  render() {
    const { categories, selectedCategory } = this.state;
    return (
      <div>
        Categoria Selecionada:
        { selectedCategory }
        {categories.map(({ name }) => (
          <div data-testid="category" key={ name }>
            <label htmlFor={ name }>
              <input
                id={ name }
                type="radio"
                name="categories"
                value={ name }
                onChange={ this.handleRadioChange }
              />
              <span>{name}</span>
            </label>
          </div>
        ))}

        <ProductList selectedCategory={ selectedCategory } categories={ categories } />
      </div>
    );
  }
}
