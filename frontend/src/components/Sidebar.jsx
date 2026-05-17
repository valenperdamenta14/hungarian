import { Link } from "react-router-dom";

function Sidebar() {

  return (
    <div
      style={{
        width: "220px",
        background: "#f4f4f4",
        minHeight: "100vh",
        padding: "20px",
      }}
    >

      <h3>Menu</h3>

      <ul style={{ listStyle: "none", padding: 0 }}>

        <li>
          <Link to="/">Dashboard</Link>
        </li>

        <li>
          <Link to="/perawat">Data Perawat</Link>
        </li>

        <li>
          <Link to="/shift">Data Shift</Link>
        </li>

        <li>
          <Link to="/optimasi">Optimasi</Link>
        </li>

        <li>
          <Link to="/jadwal">Jadwal</Link>
        </li>

      </ul>

    </div>
  );
}

export default Sidebar;