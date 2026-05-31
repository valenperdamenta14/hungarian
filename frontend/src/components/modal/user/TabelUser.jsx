import {
  Pencil,
  Trash2,
  UserCog,
} from "lucide-react";

export default function TabelUser({
  users,
  onEdit,
  onDelete,
}) {
  return (
    <div className="bg-white rounded-3xl shadow-sm border overflow-hidden">

      <div className="p-5 border-b flex items-center gap-3">
        <UserCog className="text-blue-600" />

        <h2 className="font-bold text-lg">
          Daftar User
        </h2>
      </div>

      <table className="w-full">
        <thead className="bg-slate-100">
          <tr>
            <th className="p-4 text-left">
              Nama
            </th>

            <th className="p-4 text-left">
              Username
            </th>

            <th className="p-4 text-left">
              Role
            </th>

            <th className="p-4 text-center">
              Aksi
            </th>
          </tr>
        </thead>

        <tbody>
          {users.length > 0 ? (
            users.map((user) => (
              <tr
                key={user.id}
                className="border-b hover:bg-slate-50"
              >
                <td className="p-4">
                  {user.nama}
                </td>

                <td className="p-4">
                  {user.username}
                </td>

                <td className="p-4">
                  <span
                    className={`px-3 py-1 rounded-full text-sm font-medium ${
                      user.role === "admin"
                        ? "bg-blue-100 text-blue-700"
                        : "bg-green-100 text-green-700"
                    }`}
                  >
                    {user.role}
                  </span>
                </td>

                <td className="p-4">
                  <div className="flex justify-center gap-2">

                    <button
                      onClick={() =>
                        onEdit(user)
                      }
                      className="bg-yellow-100 text-yellow-600 p-2 rounded-lg"
                    >
                      <Pencil size={18} />
                    </button>

                    <button
                      onClick={() =>
                        onDelete(user.id)
                      }
                      className="bg-red-100 text-red-600 p-2 rounded-lg"
                    >
                      <Trash2 size={18} />
                    </button>

                  </div>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td
                colSpan="4"
                className="text-center py-10 text-slate-400"
              >
                Belum ada data user
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}