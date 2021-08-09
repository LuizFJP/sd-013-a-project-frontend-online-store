import React from 'react';
import getCategories from './services/api';

class App extends React.Component {
  render() {
    return getCategories();
  }
}
export default App;
