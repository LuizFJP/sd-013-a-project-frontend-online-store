import React from 'react';
import { getCategories } from '../services/api';
import CategorieCard from './CategorieCard';

class Categories extends React.Component {
  constructor() {
    super();

    this.state = {
      categories: [],
    };
  }

  // componentDidMount(){
  //   getCategories()
  //     .then((result) => console.log(result));
  // }

  componentDidMount() {
    getCategories()
      .then((result) => this.setState({ categories: result }));
  }

  render() {
    const { categories } = this.state;

    return (
      <div>

        <h2>Categorias:</h2>
        { categories.map(({ id, name }) => <CategorieCard key={ id } name={ name } />) }

      </div>
    );
  }
}

export default Categories;
