import './style.css'
import { Route, Routes } from "react-router-dom";

import ProtectedRoutes from './components/organisims/ProtectedRoute';
import Login from './components/pages/Login';
import Home from './components/pages/Home';
import Sidebar from './components/organisims/Sidebar';
import Menu from "./components/molecules/Menu";

function App() {
  return (
    <>
      <Routes>
        {/* <Route element={<ProtectedRoutes />}>
          <Route path="/" element={<Home />} />
          <Route path="/menu" element={<Menu />} />
        </Route> */}

        <Route path="/" element={<Sidebar />} />
        {/* <Route path="/login" element={<Login />} replace /> */}
        {/* <Route path="*" element={<Login />} replace /> */}
      </Routes>
    </>
  );
}

export default App;
