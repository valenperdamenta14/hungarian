import { useState } from "react";
import api from "../api/api";
import {
  Sparkles,
  PlayCircle,
  Loader2,
  CalendarDays,
  Activity,
  CheckCircle2,
} from "lucide-react";

export default function Optimasi() {
  const [hari, setHari] = useState("");
  const [hasil, setHasil] = useState([]);
  const [totalCost, setTotalCost] = useState(0);
  const [loading, setLoading] = useState(false);

  const generateOptimasi = async () => {
    if (!hari) {
      alert("Masukkan hari terlebih dahulu");
      return;
    }

    try {
      setLoading(true);

      const res = await api.post(
        "/optimasi",
        {
          hari: parseInt(hari),
        }
      );

      setHasil(res.data.hasil);
      setTotalCost(res.data.totalCost);

    } catch (err) {
      console.log(err);
      alert("Gagal generate optimasi");
    } finally {
      setLoading(false);
    }
  };

  const getShiftColor = (shift) => {
    switch (shift) {
      case "Pagi":
        return {
          background: "#fef3c7",
          color: "#d97706",
        };

      case "Sore":
        return {
          background: "#dbeafe",
          color: "#2563eb",
        };

      case "Malam":
        return {
          background: "#e5e7eb",
          color: "#111827",
        };

      case "Libur":
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
          marginBottom: "28px",
        }}
      >
        <h1
          style={{
            margin: 0,
            fontSize: "32px",
            color: "#111827",
          }}
        >
          Optimasi Metode Hungarian
        </h1>

        <p
          style={{
            marginTop: "6px",
            color: "#6b7280",
          }}
        >
          Generate penjadwalan perawat secara optimal
          menggunakan algoritma Hungarian
        </p>
      </div>

      {/* Top Cards */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns:
            "repeat(auto-fit, minmax(240px, 1fr))",
          gap: "22px",
          marginBottom: "28px",
        }}
      >
        <div style={cardStyle}>
          <div
            style={{
              ...iconBox,
              background: "#dbeafe",
              color: "#2563eb",
            }}
          >
            <CalendarDays size={26} />
          </div>

          <div>
            <h3 style={cardTitle}>
              Hari Dipilih
            </h3>

            <h1 style={cardValue}>
              {hari || "-"}
            </h1>
          </div>
        </div>

        <div style={cardStyle}>
          <div
            style={{
              ...iconBox,
              background: "#d1fae5",
              color: "#059669",
            }}
          >
            <Activity size={26} />
          </div>

          <div>
            <h3 style={cardTitle}>
              Total Cost
            </h3>

            <h1 style={cardValue}>
              {totalCost}
            </h1>
          </div>
        </div>

        <div style={cardStyle}>
          <div
            style={{
              ...iconBox,
              background: "#ede9fe",
              color: "#7c3aed",
            }}
          >
            <CheckCircle2 size={26} />
          </div>

          <div>
            <h3 style={cardTitle}>
              Total Hasil
            </h3>

            <h1 style={cardValue}>
              {hasil.length}
            </h1>
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
          Generate Optimasi
        </h2>

        <div
          style={{
            display: "flex",
            gap: "16px",
            flexWrap: "wrap",
            alignItems: "center",
          }}
        >
          <input
            type="number"
            min="1"
            max="31"
            placeholder="Masukkan Hari"
            value={hari}
            onChange={(e) =>
              setHari(e.target.value)
            }
            style={{
              padding: "14px 16px",
              borderRadius: "14px",
              border: "1px solid #e5e7eb",
              outline: "none",
              background: "#f9fafb",
              fontSize: "14px",
              width: "220px",
            }}
          />

          <button
            onClick={generateOptimasi}
            disabled={loading}
            style={{
              border: "none",
              padding: "14px 24px",
              borderRadius: "14px",
              background:
                "linear-gradient(135deg, #2563eb, #3b82f6)",
              color: "white",
              fontWeight: "600",
              cursor: "pointer",
              display: "flex",
              alignItems: "center",
              gap: "10px",
              fontSize: "14px",
              opacity: loading ? 0.7 : 1,
            }}
          >
            {loading ? (
              <Loader2
                size={18}
                className="spin"
              />
            ) : (
              <PlayCircle size={18} />
            )}

            {loading
              ? "Processing..."
              : "Generate Optimasi"}
          </button>
        </div>
      </div>

      {/* Result */}
      {!loading &&
        hasil.length > 0 && (
          <div
            style={{
              background: "white",
              borderRadius: "24px",
              padding: "28px",
              boxShadow:
                "0 10px 25px rgba(0,0,0,0.05)",
            }}
          >
            {/* Header */}
            <div
              style={{
                display: "flex",
                justifyContent:
                  "space-between",
                alignItems: "center",
                marginBottom: "24px",
              }}
            >
              <div>
                <h2
                  style={{
                    margin: 0,
                    color: "#111827",
                  }}
                >
                  Hasil Optimasi
                </h2>

                <p
                  style={{
                    marginTop: "6px",
                    color: "#6b7280",
                  }}
                >
                  Jadwal optimal berhasil
                  dihasilkan
                </p>
              </div>

              <div
                style={{
                  padding: "14px 18px",
                  borderRadius: "16px",
                  background:
                    "linear-gradient(135deg, #2563eb, #3b82f6)",
                  color: "white",
                }}
              >
                <h4
                  style={{
                    margin: 0,
                    fontSize: "13px",
                    opacity: 0.9,
                  }}
                >
                  Total Cost
                </h4>

                <h2
                  style={{
                    margin: "6px 0 0",
                  }}
                >
                  {totalCost}
                </h2>
              </div>
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
                      "Shift",
                      "Cost",
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
                  {hasil.map(
                    (item, index) => (
                      <tr
                        key={index}
                        style={{
                          borderBottom:
                            index !==
                            hasil.length -
                              1
                              ? "1px solid #f3f4f6"
                              : "none",
                        }}
                      >
                        <td
                          style={
                            tableCell
                          }
                        >
                          {
                            item.kode_perawat
                          }
                        </td>

                        <td
                          style={{
                            ...tableCell,
                            fontWeight:
                              "600",
                          }}
                        >
                          {
                            item.nama_perawat
                          }
                        </td>

                        <td
                          style={
                            tableCell
                          }
                        >
                          <span
                            style={{
                              padding:
                                "8px 14px",
                              borderRadius:
                                "999px",
                              fontSize:
                                "13px",
                              fontWeight:
                                "600",
                              ...getShiftColor(
                                item.nama_shift
                              ),
                            }}
                          >
                            {
                              item.nama_shift
                            }
                          </span>
                        </td>

                        <td
                          style={
                            tableCell
                          }
                        >
                          <span
                            style={{
                              padding:
                                "8px 12px",
                              borderRadius:
                                "12px",
                              background:
                                "#f3f4f6",
                              fontWeight:
                                "600",
                            }}
                          >
                            {
                              item.cost
                            }
                          </span>
                        </td>
                      </tr>
                    )
                  )}
                </tbody>
              </table>
            </div>
          </div>
        )}
    </div>
  );
}

const cardStyle = {
  background: "white",
  borderRadius: "22px",
  padding: "24px",
  boxShadow: "0 10px 25px rgba(0,0,0,0.05)",
  display: "flex",
  alignItems: "center",
  gap: "18px",
};

const iconBox = {
  width: "60px",
  height: "60px",
  borderRadius: "18px",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
};

const cardTitle = {
  margin: 0,
  color: "#6b7280",
  fontSize: "14px",
};

const cardValue = {
  margin: "8px 0 0",
  color: "#111827",
  fontSize: "30px",
};

const tableCell = {
  padding: "18px 16px",
  color: "#374151",
  fontSize: "14px",
};