import { useEffect, useState } from "react";
import api from "../api/api";

import { Users, UserPlus, UserCog } from "lucide-react";

import TambahUser from "../components/modal/user/TambahUser";
import EditUser from "../components/modal/user/EditUser";
import TabelUser from "../components/modal/user/TabelUser";

export default function ManajemenUser() {
  const [users, setUsers] = useState([]);

  const [showTambah, setShowTambah] = useState(false);
  const [showEdit, setShowEdit] = useState(false);

  const [selectedUser, setSelectedUser] = useState(null);

  useEffect(() => {
    loadUsers();
  }, []);

  const loadUsers = async () => {
    try {
      const res = await api.get("/auth/users");
      setUsers(res.data);
    } catch (err) {
      console.log(err);
    }
  };

  const handleDelete = async (id) => {
    if (!window.confirm("Hapus user?")) return;

    try {
      await api.delete(`/auth/users/${id}`);
      loadUsers();
    } catch (err) {
      console.log(err);
    }
  };

  const handleEdit = (user) => {
    setSelectedUser(user);
    setShowEdit(true);
  };

  return (
    <div className="p-6 bg-slate-50 min-h-screen">
      {/* Header */}
      <div className="flex justify-between items-center mb-8">
        <div>
          <div className="flex items-center gap-3 mb-2">          
            <UserCog
                className="text-blue-600"
                size={30}
              />
            <h1 className="text-3xl font-bold text-slate-800">
              Manajemen User
            </h1>
          </div>

          <p className="text-slate-500">
            Kelola akun Admin dan Kepala Ruangan
          </p>
        </div>

        <button
          onClick={() => setShowTambah(true)}
          className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-3 rounded-xl flex items-center gap-2"
        >
          <UserPlus size={18} />
          Tambah User
        </button>
      </div>

      {/* Statistik */}
      <div className="bg-white rounded-3xl shadow-sm border p-6 mb-6">
        <div className="flex items-center gap-4">
          <div className="bg-blue-100 p-4 rounded-2xl">
            <Users size={30} className="text-blue-600" />
          </div>

          <div>
            <h2 className="text-3xl font-bold">
              {users.length}
            </h2>

            <p className="text-slate-500">
              Total User Terdaftar
            </p>
          </div>
        </div>
      </div>

      <TabelUser
        users={users}
        onEdit={handleEdit}
        onDelete={handleDelete}
      />

      {showTambah && (
        <TambahUser
          onClose={() => setShowTambah(false)}
          refreshData={loadUsers}
        />
      )}

      {showEdit && (
        <EditUser
          user={selectedUser}
          onClose={() => setShowEdit(false)}
          refreshData={loadUsers}
        />
      )}
    </div>
  );
}