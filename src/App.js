import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/home/home.jsx';
import Login from './pages/login/login.jsx';
import { PrivateRoutes } from './routes/PrivateRoutes.jsx';

function App() {
  return (
    <div className="app--container">
      <Router>
        <Routes>
          <Route element={<PrivateRoutes />}>
            <Route element={<Home />} path="/" exact ></Route>
          </Route>
          
          
          <Route element={<Login/>} path="/login" />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
