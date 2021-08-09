import React from 'react';
import { Route, Switch, BrowserRouter } from 'react-router-dom';

import Home from './components/Home';

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route path="/" component={ Home } />
        </Switch>
      </BrowserRouter>
    );
  }
}
export default App;
