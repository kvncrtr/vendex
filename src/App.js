import React from 'react';
import Login from './components/pages/Login';
import Form from './components/molecules/Form';
import './style.css'

function App() {
  return (
    <div className="app--container">
      <Form />
      <Login />
    </div>
  );
}

export default App;
