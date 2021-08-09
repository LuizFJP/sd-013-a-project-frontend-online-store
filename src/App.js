import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import './App.css';
import SearchBar from './Components/SearchBar';
// import * as api from './services/api';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Route exact path="/" component={ SearchBar } />
      </BrowserRouter>
    </div>
  );
}

export default App;
