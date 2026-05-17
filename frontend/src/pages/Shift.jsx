import { useEffect, useState } from "react";

import api from "../api/api";

import Navbar from "../components/Navbar";
import Sidebar from "../components/SIdebar";

function Shift() {

  const [data, setData] = useState([]);

  useEffect(() => {
    getShift();
  }, []);

  const getShift = async () => {

    try {

      const res = await api.get("/shift");
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

          <h1>Data Shift</h1>

          <table
            border="1"
            cellPadding="10"
            width="100%"
          >

            <thead>
              <tr>
                <th>ID</th>
                <th>Nama Shift</th>
                <th>Jumlah Shift</th>
              </tr>
            </thead>

            <tbody>

              {data.map((item) => (
                <tr key={item.id_shift}>
                  <td>{item.id_shift}</td>
                  <td>{item.nama_shift}</td>
                  <td>{item.jumlah_shift}</td>
                </tr>
              ))}

            </tbody>

          </table>

        </div>

      </div>

    </div>
  );
}

export default Shift;