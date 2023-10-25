import React from 'react';
import './css/App.css';
import Router from "./router";
import NavBar from './components/navbar';

const App = () => {
  return (
    <div>
      <NavBar />
      <Router />
    </div>
  );
}

export default App;