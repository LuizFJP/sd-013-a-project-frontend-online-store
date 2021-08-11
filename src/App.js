import React, { Component } from 'react';
import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { SearchInput, ShoppingCart } from './components';
import Main from './pages/Main';

class App extends Component {
  // constructor() {
  //   super();
  //   this.state = {
  //     productCart: [],
  //   };
  // }

  addToCart = (objProducts) => {
    this.productCart = [...this.productCart, objProducts];
  };

  render() {
    // const { productCart } = this.state;
    console.log(this.productCart);
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            <Main callBack={ this.addToCart } />
          </Route>
          <Route path="/mycart">
            <ShoppingCart product={ this.productCart } />
          </Route>
          {/* <Route exact path="/" component={ Main } />
          <Route path="/mycart" component={ ShoppingCart } />
          <Route path="/mycart" component={ SearchInput } /> */}
        </Switch>
      </BrowserRouter>
    );
  }
}
export default App;
