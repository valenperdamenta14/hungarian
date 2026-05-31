import { Routes, Route, useLocation } from "react-router-dom";

import Sidebar from "./components/Sidebar";
import Navbar from "./components/Navbar";
import ProtectedRoute from "./components/ProtectedRoute";

import LandingPage from "./pages/LandingPage";
import Login from "./pages/Login";
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
    location.pathname !== "/login";

  return (
    <div className="flex min-h-screen bg-slate-100">
      {showSidebar && <Sidebar />}

      <div
        className={`flex-1 ${
          showSidebar ? "ml-[270px]" : ""
        }`}
      >
        {showSidebar && <Navbar />}

        <div className={showSidebar ? "p-5" : ""}>
          <Routes>
            {/* Landing Page */}
            <Route
              path="/"
              element={<LandingPage />}
            />

            {/* Login */}
            <Route
              path="/login"
              element={<Login />}
            />

            {/* Dashboard */}
            <Route
              path="/dashboard"
              element={
                <ProtectedRoute>
                  <Dashboard />
                </ProtectedRoute>
              }
            />

            {/* Perawat */}
            <Route
              path="/perawat"
              element={
                <ProtectedRoute>
                  <Perawat />
                </ProtectedRoute>
              }
            />

            {/* Shift */}
            <Route
              path="/shift"
              element={
                <ProtectedRoute>
                  <Shift />
                </ProtectedRoute>
              }
            />

            {/* Histori */}
            <Route
              path="/histori"
              element={
                <ProtectedRoute>
                  <Histori />
                </ProtectedRoute>
              }
            />

            {/* Optimasi */}
            <Route
              path="/optimasi"
              element={
                <ProtectedRoute>
                  <Optimasi />
                </ProtectedRoute>
              }
            />

            {/* Manajemen User */}
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