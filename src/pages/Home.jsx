import React from 'react';
import CategoriesList from '../components/CategoriesList';
import Products from './Products';
import Header from '../components/Header';
import Search from '../components/Search';
import classes from './Home.module.css';
import { getProductsFromCategoryAndQuery } from '../services/api';

export default class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      query: '',
      category: '',
      request: false,
      data: [],
    };

    this.onClick = this.onClick.bind(this);
    this.onChange = this.onChange.bind(this);
  }

  onClick = async (id) => {
    console.log('id', id);
    const { query, category } = this.state;
    this.setState({
      category: id,
      request: true,
    }, async () => {
      const data = await getProductsFromCategoryAndQuery(category, query);
      this.setState({
        data: data.results,
        request: false,
        query: '',
      });
    });
  };

  onChange = ({ target }) => {
    const { value, name } = target;
    console.log('value', value);
    console.log('name', name);
    this.setState({
      [name]: value,
    });
  };

  render() {
    const { query, data, request } = this.state;

    return (
      <main className={ classes.mainContainer }>
        <CategoriesList onClick={ this.onClick } />
        <section className={ classes.contentContainer }>
          <Header />
          <Search
            onClick={ this.onClick }
            onChange={ this.onChange }
            query={ query }
          />
          <Products data={ data } request={ request } />
        </section>
      </main>
    );
  }
}
