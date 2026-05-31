import { useEffect, useState } from "react";
import api from "../api/api";
import {
  CalendarDays,
  Search,
  ClipboardList,
  History,
} from "lucide-react";

const DAYS = Array.from(
  { length: 31 },
  (_, i) => String(i + 1).padStart(2, "0")
);

const SHIFT_LEGEND = [
  {
    label: "Pagi",
    code: "P",
    className:
      "bg-amber-100 text-amber-600",
  },
  {
    label: "Sore",
    code: "S",
    className:
      "bg-blue-100 text-blue-600",
  },
  {
    label: "Malam",
    code: "M",
    className:
      "bg-gray-200 text-gray-900",
  },
  {
    label: "Libur",
    code: "L",
    className:
      "bg-emerald-100 text-emerald-600",
  },
];

export default function Histori() {
  const [data, setData] = useState([]);
  const [search, setSearch] =
    useState("");

  useEffect(() => {
    loadData();
  }, []);

  const loadData = async () => {
    try {
      const res = await api.get(
        "/histori"
      );
      setData(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  const filteredData = data.filter(
    (item) =>
      item.nama_perawat
        ?.toLowerCase()
        .includes(search.toLowerCase())
  );

  const getShiftClass = (
    shift
  ) => {
    switch (shift) {
      case "P":
        return "bg-amber-100 text-amber-600";

      case "S":
        return "bg-blue-100 text-blue-600";

      case "M":
        return "bg-gray-200 text-gray-900";

      case "L":
        return "bg-emerald-100 text-emerald-600";

      default:
        return "bg-slate-100 text-slate-500";
    }
  };

  return (
    <div className="p-8 bg-slate-100 min-h-screen">
      {/* Header */}
      <div className="flex justify-between items-center mb-7">
        <div>
          <div className="flex items-center gap-3 mb-2">          
            <History
                className="text-blue-600"
                size={30}
              />
            <h1 className="text-3xl font-bold text-slate-900">
              Histori Shift
            </h1>            
          </div>
          <p className="mt-1.5 text-slate-500">
            Data histori penjadwalan
            perawat bulan Desember
            2025
          </p>          
        </div>

        <div className="bg-white px-5 py-4 rounded-2xl shadow-sm border flex items-center gap-3">
          <ClipboardList className="text-blue-600" />

          <div>
            <h3 className="font-bold text-slate-900">
              {data.length}
            </h3>

            <p className="text-xs text-slate-500">
              Total Histori
            </p>
          </div>
        </div>
      </div>

      {/* Legend */}
      <div className="bg-white p-5 rounded-3xl shadow-sm border mb-6 flex flex-wrap gap-3 items-center">
        <h3 className="font-semibold text-slate-900 mr-2">
          Keterangan:
        </h3>

        {SHIFT_LEGEND.map(
          (item, index) => (
            <div
              key={index}
              className={`flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-semibold ${item.className}`}
            >
              <CalendarDays size={16} />
              {item.code} -{" "}
              {item.label}
            </div>
          )
        )}
      </div>

      {/* Table Card */}
      <div className="bg-white rounded-3xl p-7 shadow-sm border">
        {/* Search */}
        <div className="flex items-center bg-slate-100 px-4 py-3 rounded-xl mb-6 max-w-sm">
          <Search
            size={18}
            className="text-slate-500"
          />

          <input
            type="text"
            placeholder="Cari nama perawat..."
            value={search}
            onChange={(e) =>
              setSearch(e.target.value)
            }
            className="ml-2.5 w-full bg-transparent outline-none text-sm"
          />
        </div>

        {/* Table */}
        <div className="overflow-x-auto">
          <table className="w-full min-w-[1500px] border-collapse">
            <thead>
              <tr className="bg-slate-50">
                <th className="px-4 py-4 text-left text-sm text-slate-700 whitespace-nowrap">
                  Kode
                </th>

                <th className="px-4 py-4 text-left text-sm text-slate-700 whitespace-nowrap">
                  Nama
                </th>

                {DAYS.map(
                  (day, index) => (
                    <th
                      key={index}
                      className="px-3 py-4 text-center text-sm text-slate-700 whitespace-nowrap"
                    >
                      {day}
                    </th>
                  )
                )}
              </tr>
            </thead>

            <tbody>
              {filteredData.map(
                (row, index) => (
                  <tr
                    key={
                      row.kode_perawat
                    }
                    className={
                      index !==
                      filteredData.length -
                        1
                        ? "border-b border-slate-100"
                        : ""
                    }
                  >
                    <td className="px-4 py-4 text-sm text-slate-700 whitespace-nowrap">
                      {
                        row.kode_perawat
                      }
                    </td>

                    <td className="px-4 py-4 text-sm font-semibold text-slate-700 whitespace-nowrap min-w-[180px]">
                      {
                        row.nama_perawat
                      }
                    </td>

                    {DAYS.map(
                      (
                        _,
                        dayIndex
                      ) => {
                        const shift =
                          row[
                            `d${String(
                              dayIndex +
                                1
                            ).padStart(
                              2,
                              "0"
                            )}`
                          ];

                        return (
                          <td
                            key={
                              dayIndex
                            }
                            className="px-2 py-3 text-center"
                          >
                            <span
                              className={`inline-flex items-center justify-center w-8 h-8 rounded-lg text-xs font-bold ${getShiftClass(
                                shift
                              )}`}
                            >
                              {shift}
                            </span>
                          </td>
                        );
                      }
                    )}
                  </tr>
                )
              )}

              {filteredData.length ===
                0 && (
                <tr>
                  <td
                    colSpan="33"
                    className="text-center py-8 text-slate-400"
                  >
                    Data histori
                    tidak ditemukan
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}