import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import App from './App';
import Error from './components/pages/Error';

import AuthContext from "./context/auth";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <Error />
  }
])

const jwt = "https://jwt.io/#debugger-io?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.k2ZZP-fFOlkYSyUYxCO3F-fN1FJBrkNd_Ry-AuvpQUQ"

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <AuthContext.Provider value={jwt}>
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>
  </AuthContext.Provider>
);