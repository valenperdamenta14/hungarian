import Navbar from "../components/Navbar";
import Sidebar from "../components/SIdebar";

function Dashboard() {

  return (
    <div>

      <Navbar />

      <div style={{ display: "flex" }}>

        <Sidebar />

        <div style={{ padding: "20px" }}>
          <h1>Dashboard</h1>
          <p>Sistem Penjadwalan Shift Perawat Metode Hungarian</p>
        </div>

      </div>

    </div>
  );
}

export default Dashboard;