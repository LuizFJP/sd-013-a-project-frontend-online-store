import React from 'react';
import * as api from '../services/api';

class Categories extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      categories: {},
      loading: true,
    };
  }

  componentDidMount() {
    api.getCategories().then((categories) => this.setState({
      categories,
      loading: false }));
  }

  render() {
    const { categories, loading } = this.state;
    if (loading) {
      return <p>Carregando...</p>;
    }
    return (
      <div>
        <h3>Categorias: </h3>
        <ol>
          {categories
            .map((categorie) => (<li key={ categorie.id }>{categorie.name}</li>))}
        </ol>
      </div>
    );
  }
}

export default Categories;
