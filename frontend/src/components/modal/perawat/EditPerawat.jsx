import { useState } from "react";
import api from "../../../api/api";
import { X } from "lucide-react";

export default function EditPerawat({
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

  const update = async (e) => {
    e.preventDefault();

    try {
      await api.put(
        `/perawat/${form.kode_perawat}`,
        form
      );

      refreshData();
      onClose();
    } catch (error) {
      alert("Gagal update");
    }
  };

  return (
    <div
      className="fixed inset-0 bg-black/40 flex justify-center items-center z-50"
      onClick={onClose}
    >
      <div
        className="bg-white w-full max-w-lg rounded-xl p-6"
        onClick={(e) =>
          e.stopPropagation()
        }
      >
        <div className="flex justify-between mb-5">
          <h2 className="text-xl font-bold">
            Edit Perawat
          </h2>

          <button onClick={onClose}>
            <X />
          </button>
        </div>

        <form
          onSubmit={update}
          className="space-y-4"
        >
            <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">
                    Kode Perawat
                </label>
                <input
                    value={form.kode_perawat}
                    disabled
                    className="w-full border p-3 rounded-lg bg-gray-100"
                />
            </div>

            <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">
                    Nama Perawat
                </label>
                <input
                    name="nama_perawat"
                    value={form.nama_perawat}
                    onChange={handleChange}
                    className="w-full border p-3 rounded-lg"
                />
            </div>

            <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">
                    Grup
                </label>
                <input
                    name="grup"
                    value={form.grup}
                    onChange={handleChange}
                    className="w-full border p-3 rounded-lg"
                />
            </div>

            <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">
                    Jabatan
                </label>
                <input
                    name="jabatan"
                    value={form.jabatan}
                    onChange={handleChange}
                    className="w-full border p-3 rounded-lg"
                />
            </div>

          <button className="w-full bg-green-600 text-white p-3 rounded-lg">
            Update
          </button>
        </form>
      </div>
    </div>
  );
}