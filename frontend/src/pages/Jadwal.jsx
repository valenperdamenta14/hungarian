import { useEffect, useState } from "react";

import api from "../api/api";

import Navbar from "../components/Navbar";
import Sidebar from "../components/SIdebar";

function Jadwal() {

  const [data, setData] = useState([]);

  useEffect(() => {
    getJadwal();
  }, []);

  const getJadwal = async () => {

    try {

      const res = await api.get("/jadwal");
      setData(res.data);

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

          <h1>Data Jadwal</h1>

          <table
            border="1"
            cellPadding="10"
            width="100%"
          >

            <thead>
              <tr>
                <th>Tanggal</th>
                <th>Nama Perawat</th>
                <th>Shift</th>
                <th>Cost</th>
              </tr>
            </thead>

            <tbody>

              {data.map((item) => (
                <tr key={item.id}>
                  <td>{item.tanggal}</td>
                  <td>{item.nama_perawat}</td>
                  <td>{item.shift_hasil}</td>
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

export default Jadwal;