import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import CarShop from './pages/CarShop';
import Home from './pages/Home';
import ProductDetails from './pages/ProductDetails';
import ListByCategory from './pages/ListByCategory';
// Luiz Furtado

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      carrinho: [],
    };
  }

  addToCart = (product) => {
    const { carrinho } = this.state;
    this.setState({ carrinho: [...carrinho, product] });
  }

  render() {
    const { carrinho } = this.state;
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={ Home } />
          <Route exact path="/carshop">
            { (props) => <CarShop { ...props } addToCart={ this.addToCart } carrinho={ carrinho } /> }
          </Route>
          <Route
            exact
            path="/product/:id"
          >
            { (props) => <ProductDetails { ...props } addToCart={ this.addToCart } /> }
          </Route>
          <Route
            path="/:category"
            render={ (props) => <ListByCategory { ...props } /> }
          />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
