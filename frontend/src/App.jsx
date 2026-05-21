import { Routes, Route } from "react-router-dom";

import Sidebar from "./components/Sidebar";

import Dashboard from "./pages/Dashboard";
import Perawat from "./pages/Perawat";
import Shift from "./pages/Shift";
import Histori from "./pages/Histori";
import Optimasi from "./pages/Optimasi";

function App() {
  return (
    <div
      style={{
        display: "flex",
        background: "#f3f4f6",
      }}
    >
      <Sidebar />

      {/* Content */}
      <div
        style={{
          flex: 1,
          marginLeft: "270px",
          minHeight: "100vh",
        }}
      >

        <div
          style={{
            padding: "20px",
          }}
        >
          <Routes>
            <Route
              path="/"
              element={<Dashboard />}
            />

            <Route
              path="/perawat"
              element={<Perawat />}
            />

            <Route
              path="/shift"
              element={<Shift />}
            />

            <Route
              path="/histori"
              element={<Histori />}
            />

            <Route
              path="/optimasi"
              element={<Optimasi />}
            />
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;