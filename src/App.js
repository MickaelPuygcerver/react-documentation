import React from 'react';
import Routes from './routes/router';
import './app.css';
import Header from './layout/header';

function App() {
  return (
    <div>
      <Header/>
      <Routes id="myapp" />
    </div>
  );
}

export default App;

