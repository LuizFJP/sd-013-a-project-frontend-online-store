import React from 'react';
import './App.css';
import { Route, BrowserRouter } from 'react-router-dom';
import MainPage from './components/MainPage';

function App() {
  return (
    <BrowserRouter>
      <Route exact path="/" component={ MainPage } />
    </BrowserRouter>
  );
}

export default App;
