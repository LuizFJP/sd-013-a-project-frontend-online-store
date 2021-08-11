import React from 'react';
import PropTypes from 'prop-types';
import '../style.css/categories.css';
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

  UpdateProduct = (id) => {
    const { onClick } = this.props;
    onClick(id);
  }

  render() {
    const { categories, loading } = this.state;

    if (loading) {
      return <p>Carregando...</p>;
    }
    return (
      <div>
        <h3>Categorias: </h3>
        <ol className="categories">
          {categories
            .map((categorie) => (
              <li
                key={ categorie.id }
                className="button-Categorie"
              >
                <button
                  data-testid="category"
                  onClick={ () => this.UpdateProduct(categorie.id) }
                  type="button"
                >
                  {categorie.name}
                </button>

              </li>))}
        </ol>
      </div>
    );
  }
}

Categories.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default Categories;
