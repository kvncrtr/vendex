import React, { useState } from 'react';
import Login from './components/pages/Login';
import './style.css'

function App() {
  const [jwtToken, setJwtToken] = useState("");

  return (
    <div className="app--container">
      <Login />
    </div>
  );
}

export default App;
