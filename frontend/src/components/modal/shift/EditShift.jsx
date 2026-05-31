import { useState } from "react";
import api from "../../../api/api";
import {
  X,
  Pencil,
} from "lucide-react";

export default function EditShift({
  data,
  onClose,
  refreshData,
}) {
  const [form, setForm] =
    useState(data);

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
        await api.put(
          `/shift/${form.kode_shift}`,
          form
        );

        refreshData();
        onClose();
      } catch (error) {
        alert("Gagal update");
      }
    };

  return (
    <div className="fixed inset-0 bg-black/40 flex justify-center items-center z-50">

      <div className="bg-white w-full max-w-lg rounded-2xl p-6">

        <div className="flex justify-between items-center border-b pb-4 mb-5">

          <div className="flex items-center gap-3">

            <div className="bg-yellow-100 p-2 rounded-xl">
              <Pencil className="text-yellow-600" />
            </div>

            <h2 className="font-bold text-xl">
              Edit Shift
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
                value={form.kode_shift}
                disabled
                className="w-full border p-3 rounded-xl bg-slate-100"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-slate-700 mb-2">
                  Kode Shift
              </label>
              <select
                name="nama_shift"
                value={form.nama_shift}
                onChange={handleChange}
                 className="w-full border p-3 rounded-xl"
              >
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
                  Kode Shift
              </label>
              <input
                type="number"
                name="jumlah_shift"
                value={form.jumlah_shift}
                onChange={handleChange}
                className="w-full border p-3 rounded-xl"
              />
            </div>

          <button className="w-full bg-green-600 hover:bg-green-700 text-white py-3 rounded-xl">
            Update Data
          </button>

        </form>

      </div>

    </div>
  );
}