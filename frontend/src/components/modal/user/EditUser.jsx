import { useState } from "react";
import api from "../../../api/api";
import { X, Pencil } from "lucide-react";

export default function EditUser({
  user,
  onClose,
  refreshData,
}) {
  const [form, setForm] = useState({
    nama: user.nama,
    username: user.username,
    role: user.role,
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const updateUser = async (e) => {
    e.preventDefault();

    try {
      await api.put(
        `/auth/users/${user.id}`,
        form
      );

      refreshData();
      onClose();

      alert("User berhasil diupdate");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="fixed inset-0 bg-black/40 flex justify-center items-center z-50">
      <div className="bg-white w-full max-w-lg rounded-3xl p-6 shadow-xl">
        <div className="flex justify-between items-center mb-6">
          <div className="flex items-center gap-3">
            <Pencil className="text-yellow-500" />
            <h2 className="text-xl font-bold">
              Edit User
            </h2>
          </div>

          <button onClick={onClose}>
            <X />
          </button>
        </div>
        
        <form
          onSubmit={updateUser}
          className="space-y-4"
        >
            <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">
                    Nama Lengkap
                </label>
                <input
                    name="nama"
                    value={form.nama}
                    onChange={handleChange}
                    className="w-full border rounded-xl p-3"
                />
            </div>

            <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">
                    Masukkan Username
                </label>
                <input
                    name="username"
                    value={form.username}
                    onChange={handleChange}
                    className="w-full border rounded-xl p-3"
                />
            </div>

            <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">
                    Pilih Role
                </label>
                <select
                    name="role"
                    value={form.role}
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
          <button className="w-full bg-yellow-500 hover:bg-yellow-600 text-white py-3 rounded-xl">
            Update User
          </button>
        </form>
      </div>
    </div>
  );
}