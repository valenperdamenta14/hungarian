import api from "../../../api/api";
import {
  Search,
  Pencil,
  Trash2,
} from "lucide-react";

export default function TabelPerawat({
  data,
  search,
  setSearch,
  loadData,
  onEdit,
}) {
  const hapusData = async (
    kode
  ) => {
    if (
      !window.confirm(
        "Hapus data?"
      )
    )
      return;

    await api.delete(
      `/perawat/${kode}`
    );

    loadData();
  };

  const filteredData =
    data.filter((item) =>
      item.nama_perawat
        .toLowerCase()
        .includes(
          search.toLowerCase()
        )
    );

  return (
    <div className="bg-white rounded-xl shadow p-6">

      <div className="flex items-center border rounded-lg px-3 py-2 mb-5 max-w-sm">
        <Search 
          size={18}
          className="text-slate-400" 
        />

        <input
          type="text"
          placeholder="Cari Perawat..."
          value={search}
          onChange={(e) =>
            setSearch(
              e.target.value
            )
          }
          className="ml-3 outline-none w-full"
        />
      </div>

      <div className="overflow-x-auto">

        <table className="w-full">
          <thead>
            <tr className="bg-slate-100">
              <th className="p-3 text-left">
                Kode
              </th>

              <th className="p-3 text-left">
                Nama
              </th>

              <th className="p-3 text-left">
                Grup
              </th>

              <th className="p-3 text-left">
                Jabatan
              </th>

              <th className="p-3 text-center">
                Aksi
              </th>
            </tr>
          </thead>

          <tbody>

            {filteredData.map(
              (item) => (
                <tr
                  key={
                    item.kode_perawat
                  }
                  className="border-b"
                >
                  <td className="p-3">
                    {
                      item.kode_perawat
                    }
                  </td>

                  <td className="p-3">
                    {
                      item.nama_perawat
                    }
                  </td>

                  <td className="p-3">
                    {item.grup}
                  </td>

                  <td className="p-3">
                    {item.jabatan}
                  </td>

                  <td className="p-3">
                    <div className="flex justify-center gap-2">

                      <button
                        onClick={() =>
                          onEdit(item)
                        }
                        className="bg-blue-100 text-blue-600 p-2 rounded-lg"
                      >
                        <Pencil size={16} />
                      </button>

                      <button
                        onClick={() =>
                          hapusData(
                            item.kode_perawat
                          )
                        }
                        className="bg-red-100 text-red-600 p-2 rounded-lg"
                      >
                        <Trash2 size={16} />
                      </button>

                    </div>
                  </td>
                </tr>
              )
            )}

          </tbody>
        </table>

      </div>
    </div>
  );
}