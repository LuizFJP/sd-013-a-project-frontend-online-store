import React from 'react';
import { getProductsFromCategoryAndQuery } from '../services/api';
import ListProducts from '../components/ListProducts';
import ButtonAndInputSearch from '../components/ButtonAndInputSearch';

class Home extends React.Component {
  constructor() {
    super();
    this.state = {
      search: '',
      result: '',
      // state: false,
    };
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
      result: data,
      // state: true,
    });
  }

  onChangeSearch = (event) => {
    this.setState({
      search: event.target.value,
    });
  }

  render() {
    const { result, state } = this.state;
    return (
      <div data-testid="home-initial-message">
        <ButtonAndInputSearch
          onChange={ this.onChangeSearch }
          onClick={ this.requestList }
        />
        <div>
          {state
            ? result
              .map((product) => <ListProducts key={ product.id } product={ product } />)
            : 'Digite algum termo de pesquisa ou escolha uma categoria.'}
        </div>
      </div>
    );
  }
}

export default Home;
