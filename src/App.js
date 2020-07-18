import React from 'react';
import Routes from './routes/router';
import './app.css';

function App() {
  return (
    <div>
      <div>
        <a class="mr-5" href="./">Hello World</a>
        <a class="mr-5" href="./custom-component">Custom Component</a>
        <a class="mr-5" href="./split-component">Split Component</a>
      </div>
      <Routes />
    </div>
  );
}

export default App;

