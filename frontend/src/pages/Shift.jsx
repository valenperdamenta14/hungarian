import { useEffect, useState } from "react";
import api from "../api/api";

import TambahShift from "../components/modal/shift/TambahShift";
import EditShift from "../components/modal/shift/EditShift";
import TabelShift from "../components/modal/shift/TabelShift";

import {
  CalendarClock,
  Plus,
  CalendarDays,
} from "lucide-react";

export default function Shift() {
  const [data, setData] = useState([]);
  const [search, setSearch] = useState("");

  const [showTambah, setShowTambah] =
    useState(false);

  const [showEdit, setShowEdit] =
    useState(false);

  const [selectedData, setSelectedData] =
    useState(null);

  useEffect(() => {
    loadData();
  }, []);

  const loadData = async () => {
    try {
      const res = await api.get("/shift");
      setData(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  const handleEdit = (row) => {
    setSelectedData(row);
    setShowEdit(true);
  };

  return (
    <div className="p-6 bg-slate-100 min-h-screen">

      <div className="flex justify-between items-center mb-8">

        <div>
          <div className="flex items-center gap-3 mb-2">
            <CalendarDays
              className="text-blue-600"
              size={30}
            />

            <h1 className="text-3xl font-bold">
              Master Shift
            </h1>
          </div>

          <p className="text-slate-500">
            Kelola data shift pegawai
          </p>
        </div>

        <div className="flex gap-4">

          <div className="bg-white px-5 py-4 rounded-2xl shadow flex items-center gap-4">

            <div className="bg-blue-100 p-3 rounded-xl">
              <CalendarClock
                className="text-blue-600"
              />
            </div>

            <div>
              <h3 className="font-bold text-lg">
                {data.length}
              </h3>

              <p className="text-sm text-slate-500">
                Total Shift
              </p>
            </div>

          </div>

          <button
            onClick={() =>
              setShowTambah(true)
            }
            className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-3 rounded-xl flex items-center gap-2"
          >
            <Plus size={18} />
            Tambah Shift
          </button>

        </div>

      </div>

      <TabelShift
        data={data}
        search={search}
        setSearch={setSearch}
        loadData={loadData}
        onEdit={handleEdit}
      />

      {showTambah && (
        <TambahShift
          refreshData={loadData}
          onClose={() =>
            setShowTambah(false)
          }
        />
      )}

      {showEdit && (
        <EditShift
          data={selectedData}
          refreshData={loadData}
          onClose={() =>
            setShowEdit(false)
          }
        />
      )}

    </div>
  );
}