import { useEffect, useState } from "react";
import api from "../api/api";
import {
  Clock3,
  Plus,
  Pencil,
  Trash2,
  Search,
  CalendarClock,
} from "lucide-react";

export default function Shift() {
  const [data, setData] = useState([]);
  const [search, setSearch] = useState("");

  const [form, setForm] = useState({
    kode_shift: "",
    nama_shift: "",
    jumlah_shift: "",
  });

  const [editMode, setEditMode] = useState(false);

  useEffect(() => {
    loadData();
  }, []);

  const loadData = async () => {
    const res = await api.get("/shift");
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
      !form.kode_shift ||
      !form.nama_shift ||
      !form.jumlah_shift
    ) {
      alert("Semua field wajib diisi");
      return;
    }

    if (editMode) {
      await api.put(
        `/shift/${form.kode_shift}`,
        form
      );
    } else {
      await api.post("/shift", form);
    }

    resetForm();
    loadData();
  };

  const editData = (row) => {
    setForm(row);
    setEditMode(true);
  };

  const hapusData = async (kode) => {
    if (!window.confirm("Hapus data shift?")) return;

    await api.delete(`/shift/${kode}`);
    loadData();
  };

  const resetForm = () => {
    setForm({
      kode_shift: "",
      nama_shift: "",
      jumlah_shift: "",
    });

    setEditMode(false);
  };

  const filteredData = data.filter((item) =>
    item.nama_shift
      .toLowerCase()
      .includes(search.toLowerCase())
  );

  const getShiftColor = (shift) => {
    switch (shift) {
      case "Pagi":
        return "#f59e0b";
      case "Sore":
        return "#3b82f6";
      case "Malam":
        return "#111827";
      case "Libur":
        return "#10b981";
      default:
        return "#6b7280";
    }
  };

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
          marginBottom: "28px",
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
            Master Shift
          </h1>

          <p
            style={{
              marginTop: "6px",
              color: "#6b7280",
            }}
          >
            Kelola data shift perawat rumah sakit
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
          <CalendarClock color="#2563eb" />

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
              Total Shift
            </p>
          </div>
        </div>
      </div>

      {/* Form */}
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
            ? "Edit Data Shift"
            : "Tambah Data Shift"}
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
            name="kode_shift"
            placeholder="Kode Shift"
            value={form.kode_shift}
            onChange={handleChange}
            disabled={editMode}
            style={inputStyle}
          />

          <select
            name="nama_shift"
            value={form.nama_shift}
            onChange={handleChange}
            style={inputStyle}
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

          <input
            type="number"
            name="jumlah_shift"
            placeholder="Jumlah Shift"
            value={form.jumlah_shift}
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
            <Plus size={18} />

            {editMode
              ? "Update Shift"
              : "Tambah Shift"}
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

      {/* Table */}
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
            placeholder="Cari shift..."
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
                  "Nama Shift",
                  "Jumlah",
                  "Status",
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
                  key={item.kode_shift}
                  style={{
                    borderBottom:
                      index !== filteredData.length - 1
                        ? "1px solid #f3f4f6"
                        : "none",
                  }}
                >
                  <td style={tableCell}>
                    {item.kode_shift}
                  </td>

                  <td style={tableCell}>
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "10px",
                      }}
                    >
                      <div
                        style={{
                          width: "12px",
                          height: "12px",
                          borderRadius: "50%",
                          background:
                            getShiftColor(
                              item.nama_shift
                            ),
                        }}
                      />

                      {item.nama_shift}
                    </div>
                  </td>

                  <td style={tableCell}>
                    {item.jumlah_shift}
                  </td>

                  <td style={tableCell}>
                    <span
                      style={{
                        padding: "8px 14px",
                        borderRadius: "999px",
                        background: `${getShiftColor(
                          item.nama_shift
                        )}15`,
                        color: getShiftColor(
                          item.nama_shift
                        ),
                        fontSize: "13px",
                        fontWeight: "600",
                      }}
                    >
                      Aktif
                    </span>
                  </td>

                  <td style={tableCell}>
                    <div
                      style={{
                        display: "flex",
                        gap: "10px",
                      }}
                    >
                      <button
                        onClick={() =>
                          editData(item)
                        }
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
                          hapusData(
                            item.kode_shift
                          )
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
                    Data shift tidak ditemukan
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