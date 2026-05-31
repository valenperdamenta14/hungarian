import { useState } from "react";
import api from "../../../api/api";
import { X, UserPlus } from "lucide-react";

export default function TambahUser({
  onClose,
  refreshData,
}) {
  const [form, setForm] = useState({
    nama: "",
    username: "",
    password: "",
    role: "admin",
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const simpan = async (e) => {
    e.preventDefault();

    try {
      await api.post("/auth/users", form);

      refreshData();
      onClose();

      alert("User berhasil ditambahkan");
    } catch (err) {
      alert(err.response?.data?.message);
    }
  };

  return (
    <div className="fixed inset-0 bg-black/40 flex justify-center items-center z-50">
      <div className="bg-white w-full max-w-lg rounded-3xl p-6 shadow-xl">
        <div className="flex justify-between items-center mb-6">
          <div className="flex items-center gap-3">
            <UserPlus className="text-blue-600" />
            <h2 className="text-xl font-bold">
              Tambah User
            </h2>
          </div>
          <button onClick={onClose}>
            <X />
          </button>
        </div>

        <form onSubmit={simpan} className="space-y-4">
            <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">
                    Nama Lengkap
                </label>
                <input
                    type="text"
                    name="nama"
                    placeholder="Masukkan Nama Lengkap"
                    onChange={handleChange}
                    className="w-full border rounded-xl p-3"
                    required
                />
            </div>

            <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">
                    Masukkan Username
                </label>
                <input
                    type="text"
                    name="username"
                    placeholder="Username"
                    onChange={handleChange}
                    className="w-full border rounded-xl p-3"
                    required
                />
            </div>

            <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">
                    Masukkan Password
                </label>
                <input
                    type="password"
                    name="password"
                    placeholder="Password"
                    onChange={handleChange}
                    className="w-full border rounded-xl p-3"
                    required
                />
            </div>

            <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">
                    Pilih Role
                </label>
                <select
                    name="role"
                    onChange={handleChange}
                    className="w-full border rounded-xl p-3"
                    >
                    <option value="admin">
                    Admin
                    </option>

                    <option value="kepala_ruangan">
                    Kepala Ruangan
                    </option>
                </select>
            </div>
          <button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-xl">
            Simpan User
          </button>
        </form>
      </div>
    </div>
  );
}