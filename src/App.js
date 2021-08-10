import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Body from './components/Body';
import ShoppingCart from './components/ShoppingCart';
import './App.css';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <Switch>
            <Route exact path="/shopping-cart" component={ ShoppingCart } />
            <Route exact path="/" component={ Body } />
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
