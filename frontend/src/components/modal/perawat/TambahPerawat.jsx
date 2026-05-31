import { useState } from "react";
import api from "../../../api/api";
import {
  X,
  UserPlus,
  UserRound,
} from "lucide-react";

export default function TambahPerawat({
  onClose,
  refreshData,
}) {
  const [form, setForm] = useState({
    kode_perawat: "",
    nama_perawat: "",
    grup: "",
    jabatan: "",
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]:
        e.target.value,
    });
  };

  const simpan = async (e) => {
    e.preventDefault();

    try {
      await api.post(
        "/perawat",
        form
      );

      refreshData();
      onClose();
    } catch (error) {
      alert("Gagal menyimpan");
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
        <div className="flex justify-between items-center border-b pb-4 mb-5">

        <div className="flex items-center gap-3">

            <div className="bg-blue-100 p-2 rounded-xl">
            <UserPlus
                className="text-blue-600"
                size={22}
            />
            </div>

            <div>
            <h2 className="font-bold text-xl">
                Tambah Perawat
            </h2>
            </div>

        </div>

        <button onClick={onClose}>
            <X />
        </button>

        </div>

        <form
          onSubmit={simpan}
          className="space-y-4"
        >
            <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">
                    Kode Perawat
                </label>
                <input
                    name="kode_perawat"
                    placeholder="Kode Perawat"
                    onChange={handleChange}
                    className="w-full border p-3 rounded-lg"
                />
            </div>

            <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">
                    Nama Perawat
                </label>
                <input
                    name="nama_perawat"
                    placeholder="Nama Perawat"
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
                    placeholder="Grup"
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
                    placeholder="Jabatan"
                    onChange={handleChange}
                    className="w-full border p-3 rounded-lg"
                />
            </div>
            
          <button className="w-full bg-blue-600 text-white p-3 rounded-lg">
            Simpan
          </button>
        </form>
      </div>
    </div>
  );
}