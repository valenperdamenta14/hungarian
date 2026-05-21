import { useEffect, useState } from "react";
import api from "../api/api";
import {
  UserPlus,
  Pencil,
  Trash2,
  Users,
  Search,
} from "lucide-react";

export default function Perawat() {
  const [data, setData] = useState([]);
  const [search, setSearch] = useState("");

  const [form, setForm] = useState({
    kode_perawat: "",
    nama_perawat: "",
    grup: "",
    jabatan: "",
  });

  const [editMode, setEditMode] = useState(false);

  useEffect(() => {
    loadData();
  }, []);

  const loadData = async () => {
    const res = await api.get("/perawat");
    setData(res.data);
  };

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const simpan = async () => {
    if (
      !form.kode_perawat ||
      !form.nama_perawat ||
      !form.grup ||
      !form.jabatan
    ) {
      alert("Semua field wajib diisi");
      return;
    }

    if (editMode) {
      await api.put(
        `/perawat/${form.kode_perawat}`,
        form
      );
    } else {
      await api.post("/perawat", form);
    }

    resetForm();
    loadData();
  };

  const editData = (row) => {
    setForm(row);
    setEditMode(true);
  };

  const hapusData = async (kode) => {
    if (!window.confirm("Hapus data perawat?")) return;

    await api.delete(`/perawat/${kode}`);
    loadData();
  };

  const resetForm = () => {
    setForm({
      kode_perawat: "",
      nama_perawat: "",
      grup: "",
      jabatan: "",
    });

    setEditMode(false);
  };

  const filteredData = data.filter((item) =>
    item.nama_perawat
      .toLowerCase()
      .includes(search.toLowerCase())
  );

  return (
    <div
      style={{
        padding: "30px",
        background: "#f3f4f6",
        minHeight: "100vh",
      }}
    >
      {/* Header */}
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginBottom: "25px",
        }}
      >
        <div>
          <h1
            style={{
              margin: 0,
              fontSize: "32px",
              color: "#111827",
            }}
          >
            Data Perawat
          </h1>

          <p
            style={{
              marginTop: "6px",
              color: "#6b7280",
            }}
          >
            Kelola data perawat rumah sakit
          </p>
        </div>

        <div
          style={{
            background: "white",
            padding: "14px 18px",
            borderRadius: "18px",
            boxShadow: "0 6px 18px rgba(0,0,0,0.06)",
            display: "flex",
            alignItems: "center",
            gap: "12px",
          }}
        >
          <Users color="#2563eb" />
          <div>
            <h3
              style={{
                margin: 0,
                color: "#111827",
              }}
            >
              {data.length}
            </h3>

            <p
              style={{
                margin: 0,
                fontSize: "13px",
                color: "#6b7280",
              }}
            >
              Total Perawat
            </p>
          </div>
        </div>
      </div>

      {/* Form Card */}
      <div
        style={{
          background: "white",
          padding: "28px",
          borderRadius: "24px",
          boxShadow: "0 10px 25px rgba(0,0,0,0.05)",
          marginBottom: "28px",
        }}
      >
        <h2
          style={{
            marginTop: 0,
            marginBottom: "22px",
            color: "#111827",
          }}
        >
          {editMode
            ? "Edit Data Perawat"
            : "Tambah Data Perawat"}
        </h2>

        <div
          style={{
            display: "grid",
            gridTemplateColumns:
              "repeat(auto-fit, minmax(220px, 1fr))",
            gap: "18px",
          }}
        >
          <input
            name="kode_perawat"
            placeholder="Kode Perawat"
            value={form.kode_perawat}
            onChange={handleChange}
            disabled={editMode}
            style={inputStyle}
          />

          <input
            name="nama_perawat"
            placeholder="Nama Perawat"
            value={form.nama_perawat}
            onChange={handleChange}
            style={inputStyle}
          />

          <input
            name="grup"
            placeholder="Grup"
            value={form.grup}
            onChange={handleChange}
            style={inputStyle}
          />

          <input
            name="jabatan"
            placeholder="Jabatan"
            value={form.jabatan}
            onChange={handleChange}
            style={inputStyle}
          />
        </div>

        <div
          style={{
            marginTop: "22px",
            display: "flex",
            gap: "14px",
          }}
        >
          <button
            onClick={simpan}
            style={{
              ...buttonStyle,
              background:
                "linear-gradient(135deg, #2563eb, #3b82f6)",
            }}
          >
            <UserPlus size={18} />
            {editMode ? "Update Data" : "Tambah Data"}
          </button>

          <button
            onClick={resetForm}
            style={{
              ...buttonStyle,
              background: "#e5e7eb",
              color: "#111827",
            }}
          >
            Reset
          </button>
        </div>
      </div>

      {/* Table Card */}
      <div
        style={{
          background: "white",
          borderRadius: "24px",
          padding: "28px",
          boxShadow: "0 10px 25px rgba(0,0,0,0.05)",
        }}
      >
        {/* Search */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            background: "#f3f4f6",
            padding: "12px 16px",
            borderRadius: "14px",
            marginBottom: "24px",
            maxWidth: "320px",
          }}
        >
          <Search size={18} color="#6b7280" />

          <input
            type="text"
            placeholder="Cari nama perawat..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            style={{
              border: "none",
              outline: "none",
              background: "transparent",
              marginLeft: "10px",
              width: "100%",
              fontSize: "14px",
            }}
          />
        </div>

        {/* Table */}
        <div
          style={{
            overflowX: "auto",
          }}
        >
          <table
            style={{
              width: "100%",
              borderCollapse: "collapse",
            }}
          >
            <thead>
              <tr
                style={{
                  background: "#f9fafb",
                }}
              >
                {[
                  "Kode",
                  "Nama Perawat",
                  "Grup",
                  "Jabatan",
                  "Aksi",
                ].map((head, index) => (
                  <th
                    key={index}
                    style={{
                      padding: "16px",
                      textAlign: "left",
                      color: "#374151",
                      fontSize: "14px",
                    }}
                  >
                    {head}
                  </th>
                ))}
              </tr>
            </thead>

            <tbody>
              {filteredData.map((item, index) => (
                <tr
                  key={item.kode_perawat}
                  style={{
                    borderBottom:
                      index !== filteredData.length - 1
                        ? "1px solid #f3f4f6"
                        : "none",
                  }}
                >
                  <td style={tableCell}>
                    {item.kode_perawat}
                  </td>

                  <td style={tableCell}>
                    {item.nama_perawat}
                  </td>

                  <td style={tableCell}>
                    {item.grup}
                  </td>

                  <td style={tableCell}>
                    {item.jabatan}
                  </td>

                  <td style={tableCell}>
                    <div
                      style={{
                        display: "flex",
                        gap: "10px",
                      }}
                    >
                      <button
                        onClick={() => editData(item)}
                        style={{
                          ...actionButton,
                          background: "#dbeafe",
                          color: "#2563eb",
                        }}
                      >
                        <Pencil size={16} />
                      </button>

                      <button
                        onClick={() =>
                          hapusData(item.kode_perawat)
                        }
                        style={{
                          ...actionButton,
                          background: "#fee2e2",
                          color: "#dc2626",
                        }}
                      >
                        <Trash2 size={16} />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}

              {filteredData.length === 0 && (
                <tr>
                  <td
                    colSpan="5"
                    style={{
                      textAlign: "center",
                      padding: "30px",
                      color: "#9ca3af",
                    }}
                  >
                    Data tidak ditemukan
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

const inputStyle = {
  padding: "14px 16px",
  borderRadius: "14px",
  border: "1px solid #e5e7eb",
  outline: "none",
  fontSize: "14px",
  background: "#f9fafb",
};

const buttonStyle = {
  border: "none",
  padding: "14px 22px",
  borderRadius: "14px",
  color: "white",
  fontWeight: "600",
  cursor: "pointer",
  display: "flex",
  alignItems: "center",
  gap: "10px",
  fontSize: "14px",
};

const tableCell = {
  padding: "18px 16px",
  color: "#374151",
  fontSize: "14px",
};

const actionButton = {
  border: "none",
  width: "38px",
  height: "38px",
  borderRadius: "12px",
  cursor: "pointer",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
};