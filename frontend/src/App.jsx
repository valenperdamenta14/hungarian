import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import Dashboard from "./pages/Dashboard";
import Perawat from "./pages/Perawat";
import Shift from "./pages/Shift";
import Optimasi from "./pages/Optimasi";
import Jadwal from "./pages/jadwal";

function App() {

  return (
    <BrowserRouter>

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
          path="/optimasi"
          element={<Optimasi />}
        />

        <Route
          path="/jadwal"
          element={<Jadwal />}
        />

      </Routes>

    </BrowserRouter>
  );
}

export default App;