import { useState } from "react";
import api from "../../../api/api";
import {
  X,
  Plus,
} from "lucide-react";

export default function TambahShift({
  onClose,
  refreshData,
}) {
      const [form, setForm] = useState({
        kode_shift: "",
        nama_shift: "",
        jumlah_shift: "",
      });

      const handleChange = (e) => {
        setForm({
          ...form,
          [e.target.name]:
            e.target.value,
        });
      };

      const handleSubmit =
        async (e) => {
          e.preventDefault();

          try {
            await api.post(
              "/shift",
              form
            );

            refreshData();
            onClose();
          } catch (error) {
            alert("Gagal menambah shift");
          }
        };

      return (
        <div className="fixed inset-0 bg-black/40 flex justify-center items-center z-50">
          <div className="bg-white w-full max-w-lg rounded-2xl p-6">
            <div className="flex justify-between items-center border-b pb-4 mb-5">
              <div className="flex items-center gap-3">
                <div className="bg-blue-100 p-2 rounded-xl">
                  <Plus className="text-blue-600" />
                </div>

                <h2 className="font-bold text-xl">
                  Tambah Shift
                </h2>
              </div>

              <button onClick={onClose}>
                <X />
              </button>

            </div>

            <form
              onSubmit={handleSubmit}
              className="space-y-4"
            >
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">
                    Kode Shift
                </label>
                <input
                  name="kode_shift"
                  placeholder="Masukkan Kode Shift"
                  onChange={handleChange}
                  className="w-full border p-3 rounded-xl"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">
                    Nama Shift
                </label>
                <select
                  name="nama_shift"
                  onChange={handleChange}
                  className="w-full border p-3 rounded-xl"
                  required
                >
                  <option value="">
                    Pilih Shift
                  </option>

                  <option value="Pagi">
                    Pagi
                  </option>

                  <option value="Sore">
                    Sore
                  </option>

                  <option value="Malam">
                    Malam
                  </option>

                  <option value="Libur">
                    Libur
                  </option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">
                    Jumlah Shift
                </label>
                <input
                  type="number"
                  name="jumlah_shift"
                  placeholder="Masukkan Jumlah Shift"
                  onChange={handleChange}
                  className="w-full border p-3 rounded-xl"
                  required
                />
              </div>

              <button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-xl">
                Simpan Data
              </button>
            </form>
          </div>
        </div>
      );
    }