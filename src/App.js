import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './Pages/Home';
import ProductDetails from './Pages/ProductDetails';
import ShoppingCart from './Pages/ShoppingCart';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      productDetails: {},
    };

    this.setProduct = this.setProduct.bind(this);
  }

  setProduct(product) {
    this.setState({
      productDetails: product,
    });
  }

  render() {
    const { productDetails } = this.state;
    return (
      <div>
        <BrowserRouter>
          <Switch>
            <Route
              exact
              path="/"
              render={ (props) => (
                <Home
                  { ...props }
                  setProduct={ this.setProduct }
                />) }
            />
            <Route
              exact
              path="/cart"
              component={ ShoppingCart }
            />
            <Route
              exact
              path="/details"
              render={ (props) => (
                <ProductDetails
                  { ...props }
                  productDetails={ productDetails }
                />) }
            />
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
