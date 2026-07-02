import { useState } from "react";
import api from "../api/api";
import {
  PlayCircle,
  Loader2,
  CalendarDays,
  Activity,
  CheckCircle2,
  Sparkles,
} from "lucide-react";

export default function Optimasi() {
  const [hari, setHari] = useState("");
  const [hasil, setHasil] = useState([]);
  const [totalCost, setTotalCost] = useState(0);
  const [loading, setLoading] = useState(false);

  const generateOptimasi = async () => {
    if (!hari) {
      alert("Masukkan hari terlebih dahulu");
      return;
    }

    try {
      setLoading(true);

      const res = await api.post("/optimasi", {
        hari: parseInt(hari),
      });

      setHasil(res.data.hasil);
      setTotalCost(res.data.totalCost);
    } catch (err) {
      console.log(err);
      alert("Gagal generate optimasi");
    } finally {
      setLoading(false);
    }
  };

  const getShiftClass = (shift) => {
    switch (shift) {
      case "Pagi":
        return "bg-amber-100 text-amber-600";

      case "Sore":
        return "bg-blue-100 text-blue-600";

      case "Malam":
        return "bg-gray-200 text-gray-900";

      case "Libur":
        return "bg-emerald-100 text-emerald-600";

      default:
        return "bg-slate-100 text-slate-500";
    }
  };

  const cards = [
    {
      title: "Hari Dipilih",
      value: hari || "-",
      icon: CalendarDays,
      bg: "bg-blue-100",
      color: "text-blue-600",
    },
    {
      title: "Total Cost",
      value: totalCost,
      icon: Activity,
      bg: "bg-emerald-100",
      color: "text-emerald-600",
    },
    {
      title: "Total Hasil",
      value: hasil.length,
      icon: CheckCircle2,
      bg: "bg-violet-100",
      color: "text-violet-600",
    },
  ];

  return (
    <div className="p-8 bg-slate-100 min-h-screen">
      {/* Header */}
      <div className="mb-7">
        <div className="flex items-center gap-3 mb-2">          
          <Sparkles
            className="text-blue-600"
            size={30}
            />
          <h1 className="text-3xl font-bold text-slate-900">
            Optimasi Shift
          </h1>            
        </div>

        <p className="mt-1.5 text-slate-500">
          Generate penjadwalan pegawai secara optimal
          menggunakan algoritma Hungarian
        </p>
      </div>

      {/* Statistik */}
      <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-5 mb-7">
        {cards.map((card, index) => {
          const Icon = card.icon;

          return (
            <div
              key={index}
              className="bg-white border border-slate-200 rounded-2xl p-5 shadow-sm"
            >
              <div className="flex justify-between items-start">
                <div>
                  <p className="text-sm text-slate-500">
                    {card.title}
                  </p>

                  <h2 className="text-4xl font-semibold text-slate-800 mt-3">
                    {card.value}
                  </h2>
                </div>

                <div
                  className={`${card.bg} p-3 rounded-xl`}
                >
                  <Icon
                    size={24}
                    className={card.color}
                  />
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Form */}
      <div className="bg-white rounded-3xl p-7 shadow-sm border mb-7">
        <h2 className="text-xl font-semibold text-slate-900 mb-5">
          Generate Optimasi
        </h2>

        <div className="flex flex-wrap gap-4 items-center">
          <input
            type="number"
            min="1"
            max="31"
            placeholder="Masukkan Hari"
            value={hari}
            onChange={(e) =>
              setHari(e.target.value)
            }
            className="w-56 px-4 py-3 rounded-xl border border-slate-200 bg-slate-50 outline-none focus:ring-2 focus:ring-blue-500"
          />

          <button
            onClick={generateOptimasi}
            disabled={loading}
            className="px-5 py-3 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-medium flex items-center gap-2 transition disabled:opacity-70"
          >
            {loading ? (
              <Loader2
                size={18}
                className="animate-spin"
              />
            ) : (
              <PlayCircle size={18} />
            )}

            {loading
              ? "Processing..."
              : "Generate Optimasi"}
          </button>
        </div>
      </div>

      {/* Hasil */}
      {!loading && hasil.length > 0 && (
        <div className="bg-white rounded-3xl p-7 shadow-sm border">
          <div className="flex justify-between items-center mb-6">
            <div>
              <h2 className="text-xl font-semibold text-slate-900">
                Hasil Optimasi
              </h2>

              <p className="text-slate-500 mt-1">
                Jadwal optimal berhasil dihasilkan
              </p>
            </div>

            <div className="bg-blue-600 text-white px-5 py-3 rounded-xl">
              <p className="text-xs opacity-80">
                Total Cost
              </p>

              <h2 className="text-2xl font-bold">
                {totalCost}
              </h2>
            </div>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-slate-50">
                  <th className="px-4 py-4 text-left text-sm text-slate-700">
                    Kode
                  </th>

                  <th className="px-4 py-4 text-left text-sm text-slate-700">
                    Nama Perawat
                  </th>

                  <th className="px-4 py-4 text-left text-sm text-slate-700">
                    Shift
                  </th>

                  <th className="px-4 py-4 text-left text-sm text-slate-700">
                    Cost
                  </th>
                </tr>
              </thead>

              <tbody>
                {hasil.map((item, index) => (
                  <tr
                    key={index}
                    className={
                      index !== hasil.length - 1
                        ? "border-b border-slate-100"
                        : ""
                    }
                  >
                    <td className="px-4 py-4 text-sm text-slate-700">
                      {item.kode_perawat}
                    </td>

                    <td className="px-4 py-4 text-sm font-semibold text-slate-700">
                      {item.nama_perawat}
                    </td>

                    <td className="px-4 py-4">
                      <span
                        className={`px-3 py-2 rounded-full text-xs font-semibold ${getShiftClass(
                          item.nama_shift
                        )}`}
                      >
                        {item.nama_shift}
                      </span>
                    </td>

                    <td className="px-4 py-4">
                      <span className="px-3 py-2 rounded-lg bg-slate-100 font-semibold text-sm">
                        {item.cost}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </div>
  );
}