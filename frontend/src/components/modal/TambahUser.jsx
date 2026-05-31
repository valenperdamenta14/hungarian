import { useState } from "react";
import api from "../../api/api";
import { X, UserPlus } from "lucide-react";

export default function TambahUser({
  onClose,
  refreshData,
}) {
  const [loading, setLoading] = useState(false);

  const [form, setForm] = useState({
    nama: "",
    username: "",
    password: "",
    role: "kepala_ruangan",
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (
      !form.nama ||
      !form.username ||
      !form.password
    ) {
      alert("Semua field wajib diisi");
      return;
    }

    try {
      setLoading(true);

      await api.post(
        "/auth/users",
        form
      );

      refreshData();
      onClose();

      alert(
        "User berhasil ditambahkan"
      );
    } catch (error) {
      alert(
        error.response?.data?.message ||
          "Gagal menambahkan user"
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      className="fixed inset-0 bg-black/50 flex justify-center items-center z-50 p-4"
      onClick={onClose}
    >
      <div
        className="bg-white rounded-2xl w-full max-w-lg shadow-2xl"
        onClick={(e) =>
          e.stopPropagation()
        }
      >
        {/* Header */}
        <div className="flex justify-between items-center p-6 border-b">
          <div className="flex items-center gap-3">
            <div className="bg-blue-100 p-2 rounded-lg">
              <UserPlus
                className="text-blue-600"
                size={22}
              />
            </div>

            <h2 className="text-xl font-bold text-slate-800">
              Tambah User
            </h2>
          </div>

          <button
            onClick={onClose}
            className="hover:bg-gray-100 p-2 rounded-lg transition"
          >
            <X size={20} />
          </button>
        </div>

        {/* Form */}
        <form
          onSubmit={handleSubmit}
          className="p-6 space-y-4"
        >
          {/* Nama */}
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-2">
              Nama Lengkap
            </label>

            <input
              type="text"
              name="nama"
              value={form.nama}
              onChange={handleChange}
              placeholder="Masukkan nama"
              className="w-full border border-gray-300 rounded-xl p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          {/* Username */}
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-2">
              Username
            </label>

            <input
              type="text"
              name="username"
              value={form.username}
              onChange={handleChange}
              placeholder="Masukkan username"
              className="w-full border border-gray-300 rounded-xl p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          {/* Password */}
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-2">
              Password
            </label>

            <input
              type="password"
              name="password"
              value={form.password}
              onChange={handleChange}
              placeholder="Masukkan password"
              className="w-full border border-gray-300 rounded-xl p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          {/* Role */}
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-2">
              Role
            </label>

            <select
              name="role"
              value={form.role}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-xl p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="admin">
                Admin
              </option>

              <option value="kepala_ruangan">
                Kepala Ruangan
              </option>
            </select>
          </div>

          {/* Tombol */}
          <div className="flex justify-end gap-3 pt-4">
            <button
              type="button"
              onClick={onClose}
              className="px-5 py-3 rounded-xl border border-gray-300 hover:bg-gray-100 transition"
            >
              Batal
            </button>

            <button
              type="submit"
              disabled={loading}
              className={`px-5 py-3 rounded-xl text-white font-medium transition ${
                loading
                  ? "bg-blue-400 cursor-not-allowed"
                  : "bg-blue-600 hover:bg-blue-700"
              }`}
            >
              {loading
                ? "Menyimpan..."
                : "Simpan User"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}