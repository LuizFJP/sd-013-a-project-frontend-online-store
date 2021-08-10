import React from 'react';
import { getProductsFromCategoryAndQuery, getCategories } from '../services/api';
import ListProducts from '../components/ListProducts';
import ButtonAndInputSearch from '../components/ButtonAndInputSearch';
import ButtonCart from '../components/ButtonCart';
import Category from '../components/Category';

class Home extends React.Component {
  constructor() {
    super();
    this.state = {
      search: '',
      result: '',
      state: false,
      categories: [],
    };
  }

  componentDidMount() {
    getCategories()
      .then((response) => this.setState({ categories: [...response] }));
  }

  componentDidUpdate() {
    this.requestList();
  }

  requestList = async () => {
    const { search } = this.state;
    let data = '';
    if (search.startsWith('MLB')) {
      data = await getProductsFromCategoryAndQuery(search, '$QUERY');
    } else {
      data = await getProductsFromCategoryAndQuery('$CATEGORY_ID', search);
    }
    this.setState({
      result: data.results,
      state: true,
    });
  }

  onChangeSearch = (event) => {
    this.setState({
      search: event.target.value,
    });
  }

  func = (categorie) => {
    this.setState({
      search: categorie,
    });
  }

  render() {
    const { result, state, categories } = this.state;
    if (categories.length === 0) {
      return <h3>Loading...</h3>;
    }

    return (
      <div>
        <div>
          <ButtonAndInputSearch
            onChange={ this.onChangeSearch }
            onClick={ this.requestList }
          />
        </div>
        <div data-testid="home-initial-message">
          {state
            ? result
              .map((product) => <ListProducts key={ product.id } product={ product } />)
            : 'Digite algum termo de pesquisa ou escolha uma categoria.'}
        </div>
        <div>
          <h3>Categorias:</h3>
          <ul>
            {categories
              .map((cat) => (<Category
                data={ cat.name }
                key={ cat.id }
                onClick={ () => this.func(cat.name) }
              />))}
          </ul>
        </div>
        <div>
          <ButtonCart />
        </div>
      </div>
    );
  }
}

export default Home;
