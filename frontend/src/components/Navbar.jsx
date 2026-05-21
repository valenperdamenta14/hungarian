import { Bell, Search, UserCircle2 } from "lucide-react";

export default function Navbar() {
  return (
    <div
      style={{
        height: "80px",
        background: "rgba(255,255,255,0.75)",
        backdropFilter: "blur(14px)",
        WebkitBackdropFilter: "blur(14px)",
        borderBottom: "1px solid rgba(0,0,0,0.06)",
        padding: "0 28px",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        position: "sticky",
        top: 0,
        zIndex: 100,
        boxShadow: "0 4px 20px rgba(0,0,0,0.04)",
      }}
    >
      {/* Left */}
      <div>
        <h2
          style={{
            margin: 0,
            fontSize: "24px",
            fontWeight: "700",
            color: "#111827",
            letterSpacing: "0.3px",
          }}
        >
          Sistem Penjadwalan Perawat
        </h2>

        <p
          style={{
            margin: "4px 0 0",
            fontSize: "14px",
            color: "#6b7280",
          }}
        >
          Optimasi Jadwal Menggunakan Metode Hungarian
        </p>
      </div>

      {/* Right */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "18px",
        }}
      >
        {/* Search */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "10px",
            background: "#f3f4f6",
            padding: "10px 16px",
            borderRadius: "14px",
            minWidth: "240px",
          }}
        >
          <Search size={18} color="#6b7280" />

          <input
            type="text"
            placeholder="Search..."
            style={{
              border: "none",
              outline: "none",
              background: "transparent",
              width: "100%",
              fontSize: "14px",
              color: "#111827",
            }}
          />
        </div>

        {/* Notification */}
        <div
          style={{
            width: "46px",
            height: "46px",
            borderRadius: "14px",
            background: "#f3f4f6",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            cursor: "pointer",
            transition: "0.3s",
          }}
        >
          <Bell size={20} color="#374151" />
        </div>

        {/* Profile */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "12px",
            background: "#f9fafb",
            padding: "8px 14px",
            borderRadius: "16px",
            border: "1px solid rgba(0,0,0,0.05)",
            cursor: "pointer",
          }}
        >
          <UserCircle2 size={40} color="#2563eb" />

          <div>
            <h4
              style={{
                margin: 0,
                fontSize: "14px",
                color: "#111827",
              }}
            >
              Admin
            </h4>

            <p
              style={{
                margin: "2px 0 0",
                fontSize: "12px",
                color: "#6b7280",
              }}
            >
              Administrator
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}