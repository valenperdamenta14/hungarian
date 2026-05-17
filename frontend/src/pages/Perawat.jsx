import { useEffect, useState } from "react";

import api from "../api/api";

import Navbar from "../components/Navbar";
import Sidebar from "../components/SIdebar";

function Perawat() {

  const [data, setData] = useState([]);

  useEffect(() => {
    getPerawat();
  }, []);

  const getPerawat = async () => {

    try {

      const res = await api.get("/perawat");
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

          <h1>Data Perawat</h1>

          <table
            border="1"
            cellPadding="10"
            width="100%"
          >

            <thead>
              <tr>
                <th>ID</th>
                <th>Nama Perawat</th>
                <th>Shift Terakhir</th>
              </tr>
            </thead>

            <tbody>

              {data.map((item) => (
                <tr key={item.id_perawat}>
                  <td>{item.id_perawat}</td>
                  <td>{item.nama_perawat}</td>
                  <td>{item.shift_terakhir}</td>
                </tr>
              ))}

            </tbody>

          </table>

        </div>

      </div>

    </div>
  );
}

export default Perawat;