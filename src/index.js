import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from "react-router-dom";
import App from './App';
import { AuthProvider } from "./context/auth";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <AuthProvider>
        <App />
      </AuthProvider>
    </BrowserRouter>
  </React.StrictMode>
);

/*

/src
├── /assets
├── /components
│   ├── /atoms
│   │   ├── Button.jsx
│   │   └── Input.jsx
│   ├── /molecules
│   │   └── Form.jsx 
│   ├── /organisims
│   │   └── PrivateRoute.jsx
│   ├── /pages
│   │   ├── Error.jsx
│   │   ├── Home.jsx
│   │   └── Login.jsx
│   ├── /context
│   │   └── auth.js
│   ├── /hooks
│   │   └── auth.js
│   ├── /services
│   │   ├── employee-api.js
│   │   └── local-storage.js
│   ├── /styles
│   │   └── {...}
├── App.js
├── index.js
└── styles.css

*/