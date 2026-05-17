import { useState } from "react";

import api from "../api/api";

import Navbar from "../components/Navbar";
import Sidebar from "../components/SIdebar";

function Optimasi() {

  const [hasil, setHasil] = useState([]);
  const [totalCost, setTotalCost] = useState(0);

  const prosesOptimasi = async () => {

    try {

      const res = await api.get("/optimasi");

      setHasil(res.data.hasil);
      setTotalCost(res.data.totalCost);

    } catch (error) {
      console.log(error);
    }

  };

  return (
    <div>

      <Navbar />

      <div style={{ display: "flex" }}>

        <Sidebar />

        <div style={{ padding: "20px", width: "100%" }}>

          <h1>Optimasi Hungarian</h1>

          <button onClick={prosesOptimasi}>
            Proses Optimasi
          </button>

          <h3>Total Cost: {totalCost}</h3>

          <table
            border="1"
            cellPadding="10"
            width="100%"
          >

            <thead>
              <tr>
                <th>Perawat</th>
                <th>Shift</th>
                <th>Cost</th>
              </tr>
            </thead>

            <tbody>

              {hasil.map((item, index) => (
                <tr key={index}>
                  <td>{item.perawat}</td>
                  <td>{item.shift}</td>
                  <td>{item.cost}</td>
                </tr>
              ))}

            </tbody>

          </table>

        </div>

      </div>

    </div>
  );
}

export default Optimasi;