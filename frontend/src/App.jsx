import { Routes, Route, useLocation } from "react-router-dom";

import Sidebar from "./components/Sidebar";
import Navbar from "./components/Navbar";
import ProtectedRoute from "./components/ProtectedRoute";

import LandingPage from "./pages/LandingPage";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";
import Perawat from "./pages/Perawat";
import Shift from "./pages/Shift";
import Histori from "./pages/Histori";
import Optimasi from "./pages/Optimasi";
import ManajemenUser from "./pages/ManajemenUser";

function App() {
  const location = useLocation();

  const showSidebar =
    location.pathname !== "/" &&
    location.pathname !== "/login" &&
    location.pathname !== "/register";

  return (
    <div className="min-h-screen bg-slate-100">
      {showSidebar && <Sidebar />}

      <div
        className={`${
          showSidebar ? "ml-[270px]" : ""
        }`}
      >
        {showSidebar && <Navbar />}

        <div
          className={
            showSidebar
              ? "p-5 pt-20"
              : ""
          }
        >
          <Routes>
            <Route
              path="/"
              element={<LandingPage />}
            />

            <Route
              path="/login"
              element={<Login />}
            />
            
            <Route
              path="/register"
              element={<Register />}
            />

            <Route
              path="/dashboard"
              element={
                <ProtectedRoute>
                  <Dashboard />
                </ProtectedRoute>
              }
            />

            <Route
              path="/perawat"
              element={
                <ProtectedRoute>
                  <Perawat />
                </ProtectedRoute>
              }
            />

            <Route
              path="/shift"
              element={
                <ProtectedRoute>
                  <Shift />
                </ProtectedRoute>
              }
            />

            <Route
              path="/histori"
              element={
                <ProtectedRoute>
                  <Histori />
                </ProtectedRoute>
              }
            />

            <Route
              path="/optimasi"
              element={
                <ProtectedRoute>
                  <Optimasi />
                </ProtectedRoute>
              }
            />

            <Route
              path="/manajemen-user"
              element={
                <ProtectedRoute requiredRole="admin">
                  <ManajemenUser />
                </ProtectedRoute>
              }
            />
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;