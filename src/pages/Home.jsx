import React from 'react';
// import { Link } from 'react-router-dom';
import CategoriesList from '../components/CategoriesList';
import Header from '../components/Header';
import Search from '../components/Search';
import classes from './Home.module.css';

export default class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  onSearch = (event) => {
    event.preventDefault();
    console.log('buscando');
    alert("clicou");
  };

  render() {
    const { onSearch } = this.onSearch;
    return (
      <main className={ classes.mainContainer }>
        <CategoriesList />
        <section className={ classes.contentContainer }>
          <Header />
          <Search onSearch={ onSearch } />
          <div className={ classes.productsContainer }>
            teste
          </div>
        </section>
      </main>
    );
  }
}
