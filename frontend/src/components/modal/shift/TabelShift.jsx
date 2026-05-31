import api from "../../../api/api";
import {
  Search,
  Pencil,
  Trash2,
  CalendarClock,
} from "lucide-react";

export default function TabelShift({
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
        "Hapus data shift?"
      )
    )
      return;

    await api.delete(
      `/shift/${kode}`
    );

    loadData();
  };

  const filteredData =
    data.filter((item) =>
      item.nama_shift
        .toLowerCase()
        .includes(
          search.toLowerCase()
        )
    );

  const getBadgeColor = (
    shift
  ) => {
    switch (shift) {
      case "Pagi":
        return "bg-yellow-100 text-yellow-700";

      case "Sore":
        return "bg-blue-100 text-blue-700";

      case "Malam":
        return "bg-slate-200 text-slate-700";

      case "Libur":
        return "bg-green-100 text-green-700";

      default:
        return "bg-gray-100";
    }
  };

  return (
    <div className="bg-white rounded-2xl shadow p-6">

      <div className="flex items-center border rounded-xl px-4 py-3 mb-6 max-w-sm">

        <Search
          size={18}
          className="text-slate-400"
        />

        <input
          type="text"
          placeholder="Cari shift..."
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
              <th className="p-4 text-left">
                Kode
              </th>

              <th className="p-4 text-left">
                Nama Shift
              </th>

              <th className="p-4 text-left">
                Jumlah
              </th>

              <th className="p-4 text-center">
                Aksi
              </th>
            </tr>
          </thead>

          <tbody>

            {filteredData.map(
              (item) => (
                <tr
                  key={
                    item.kode_shift
                  }
                  className="border-b"
                >
                  <td className="p-4">
                    {
                      item.kode_shift
                    }
                  </td>

                  <td className="p-4">

                    <span
                      className={`px-3 py-1 rounded-full text-sm font-medium ${getBadgeColor(
                        item.nama_shift
                      )}`}
                    >
                      {
                        item.nama_shift
                      }
                    </span>

                  </td>

                  <td className="p-4">
                    {
                      item.jumlah_shift
                    }{" "}
                    Orang
                  </td>

                  <td className="p-4">

                    <div className="flex justify-center gap-2">

                      <button
                        onClick={() =>
                          onEdit(item)
                        }
                        className="bg-blue-100 text-blue-600 p-2 rounded-xl"
                      >
                        <Pencil size={16} />
                      </button>

                      <button
                        onClick={() =>
                          hapusData(
                            item.kode_shift
                          )
                        }
                        className="bg-red-100 text-red-600 p-2 rounded-xl"
                      >
                        <Trash2 size={16} />
                      </button>

                    </div>

                  </td>
                </tr>
              )
            )}

            {filteredData.length ===
              0 && (
              <tr>
                <td
                  colSpan="4"
                  className="text-center py-12"
                >
                  <div className="flex flex-col items-center gap-3">

                    <CalendarClock
                      size={50}
                      className="text-slate-300"
                    />

                    <p className="text-slate-400">
                      Data shift tidak ditemukan
                    </p>

                  </div>
                </td>
              </tr>
            )}

          </tbody>

        </table>

      </div>

    </div>
  );
}