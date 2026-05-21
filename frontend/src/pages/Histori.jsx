import { useEffect, useState } from "react";
import api from "../api/api";
import {
  CalendarDays,
  Search,
  ClipboardList,
} from "lucide-react";

export default function Histori() {
  const [data, setData] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    loadData();
  }, []);

  const loadData = async () => {
    const res = await api.get("/histori");
    setData(res.data);
  };

  const filteredData = data.filter((item) =>
    item.nama_perawat
      .toLowerCase()
      .includes(search.toLowerCase())
  );

  const getShiftStyle = (shift) => {
    switch (shift) {
      case "P":
        return {
          background: "#fef3c7",
          color: "#d97706",
        };

      case "S":
        return {
          background: "#dbeafe",
          color: "#2563eb",
        };

      case "M":
        return {
          background: "#e5e7eb",
          color: "#111827",
        };

      case "L":
        return {
          background: "#d1fae5",
          color: "#059669",
        };

      default:
        return {
          background: "#f3f4f6",
          color: "#6b7280",
        };
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
            Histori Shift
          </h1>

          <p
            style={{
              marginTop: "6px",
              color: "#6b7280",
            }}
          >
            Data histori penjadwalan perawat bulan
            Desember 2025
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
          <ClipboardList color="#2563eb" />

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
              Total Histori
            </p>
          </div>
        </div>
      </div>

      {/* Legend */}
      <div
        style={{
          background: "white",
          padding: "20px",
          borderRadius: "22px",
          marginBottom: "24px",
          boxShadow: "0 10px 25px rgba(0,0,0,0.05)",
          display: "flex",
          flexWrap: "wrap",
          gap: "14px",
          alignItems: "center",
        }}
      >
        <h3
          style={{
            margin: 0,
            marginRight: "10px",
            color: "#111827",
          }}
        >
          Keterangan:
        </h3>

        {[
          {
            label: "Pagi",
            code: "P",
            color: "#fef3c7",
            text: "#d97706",
          },
          {
            label: "Sore",
            code: "S",
            color: "#dbeafe",
            text: "#2563eb",
          },
          {
            label: "Malam",
            code: "M",
            color: "#e5e7eb",
            text: "#111827",
          },
          {
            label: "Libur",
            code: "L",
            color: "#d1fae5",
            text: "#059669",
          },
        ].map((item, index) => (
          <div
            key={index}
            style={{
              display: "flex",
              alignItems: "center",
              gap: "10px",
              padding: "10px 14px",
              borderRadius: "14px",
              background: item.color,
              color: item.text,
              fontWeight: "600",
              fontSize: "14px",
            }}
          >
            <CalendarDays size={16} />
            {item.code} - {item.label}
          </div>
        ))}
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
              minWidth: "1500px",
            }}
          >
            <thead>
              <tr
                style={{
                  background: "#f9fafb",
                }}
              >
                <th style={headStyle}>
                  Kode
                </th>

                <th style={headStyle}>
                  Nama
                </th>

                {Array.from(
                  { length: 31 },
                  (_, i) => (
                    <th
                      key={i}
                      style={{
                        ...headStyle,
                        textAlign: "center",
                      }}
                    >
                      {String(i + 1).padStart(
                        2,
                        "0"
                      )}
                    </th>
                  )
                )}
              </tr>
            </thead>

            <tbody>
              {filteredData.map((row, index) => (
                <tr
                  key={row.kode_perawat}
                  style={{
                    borderBottom:
                      index !==
                      filteredData.length - 1
                        ? "1px solid #f3f4f6"
                        : "none",
                  }}
                >
                  <td style={tableCell}>
                    {row.kode_perawat}
                  </td>

                  <td
                    style={{
                      ...tableCell,
                      fontWeight: "600",
                      minWidth: "180px",
                    }}
                  >
                    {row.nama_perawat}
                  </td>

                  {Array.from(
                    { length: 31 },
                    (_, i) => {
                      const shift =
                        row[
                          `d${String(
                            i + 1
                          ).padStart(
                            2,
                            "0"
                          )}`
                        ];

                      return (
                        <td
                          key={i}
                          style={{
                            padding: "14px 8px",
                            textAlign: "center",
                          }}
                        >
                          <span
                            style={{
                              display: "inline-flex",
                              alignItems: "center",
                              justifyContent:
                                "center",
                              width: "34px",
                              height: "34px",
                              borderRadius: "10px",
                              fontWeight: "700",
                              fontSize: "13px",
                              ...getShiftStyle(
                                shift
                              ),
                            }}
                          >
                            {shift}
                          </span>
                        </td>
                      );
                    }
                  )}
                </tr>
              ))}

              {filteredData.length === 0 && (
                <tr>
                  <td
                    colSpan="33"
                    style={{
                      textAlign: "center",
                      padding: "30px",
                      color: "#9ca3af",
                    }}
                  >
                    Data histori tidak ditemukan
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

const headStyle = {
  padding: "16px",
  textAlign: "left",
  color: "#374151",
  fontSize: "14px",
  whiteSpace: "nowrap",
};

const tableCell = {
  padding: "16px",
  color: "#374151",
  fontSize: "14px",
  whiteSpace: "nowrap",
};