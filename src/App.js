import React from 'react';
import logo from './logo.svg';
import './App.css';
import * as api from './services/api'

function App() {
  const {getCategories} = api
  return (
    <div >
      {getCategories()}

    </div>
  );
}

export default App;
