import { NavLink } from "react-router-dom";
import {
  LayoutDashboard,
  Users,
  CalendarDays,
  History,
  Sparkles,
} from "lucide-react";

const menus = [
  {
    name: "Dashboard",
    path: "/",
    icon: <LayoutDashboard size={20} />,
  },
  {
    name: "Data Perawat",
    path: "/perawat",
    icon: <Users size={20} />,
  },
  {
    name: "Data Shift",
    path: "/shift",
    icon: <CalendarDays size={20} />,
  },
  {
    name: "Histori Shift",
    path: "/histori",
    icon: <History size={20} />,
  },
  {
    name: "Proses Optimasi",
    path: "/optimasi",
    icon: <Sparkles size={20} />,
  },
];

export default function Sidebar() {
  return (
    <div
      style={{
        width: "270px",
        height: "100vh",
        background:
          "linear-gradient(180deg, #111827 0%, #1f2937 50%, #0f172a 100%)",
        padding: "24px 18px",
        color: "white",
        display: "flex",
        flexDirection: "column",
        boxShadow: "4px 0 20px rgba(0,0,0,0.15)",
        borderRight: "1px solid rgba(255,255,255,0.08)",

        /* FIX SIDEBAR */
        position: "fixed",
        top: 0,
        left: 0,
        overflowY: "auto",
        zIndex: 1000,
      }}
    >
      {/* Logo */}
      <div
        style={{
          marginBottom: "40px",
          padding: "10px 14px",
          borderRadius: "16px",
          background: "rgba(255,255,255,0.06)",
          backdropFilter: "blur(10px)",
          border: "1px solid rgba(255,255,255,0.08)",
        }}
      >
        <h2
          style={{
            margin: 0,
            fontSize: "22px",
            fontWeight: "700",
            letterSpacing: "0.5px",
          }}
        >
          Nurse<span style={{ color: "#60a5fa" }}>Shift</span>
        </h2>

        <p
          style={{
            marginTop: "6px",
            fontSize: "13px",
            color: "#9ca3af",
          }}
        >
          Management System
        </p>
      </div>

      {/* Menu */}
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "10px",
        }}
      >
        {menus.map((menu, index) => (
          <NavLink
            key={index}
            to={menu.path}
            style={({ isActive }) => ({
              display: "flex",
              alignItems: "center",
              gap: "14px",
              padding: "14px 16px",
              borderRadius: "14px",
              textDecoration: "none",
              color: isActive ? "#ffffff" : "#d1d5db",
              background: isActive
                ? "linear-gradient(135deg, #2563eb, #3b82f6)"
                : "transparent",
              boxShadow: isActive
                ? "0 8px 20px rgba(37,99,235,0.35)"
                : "none",
              transition: "all 0.3s ease",
              fontWeight: "500",
              fontSize: "15px",
            })}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "translateX(4px)";

              if (
                !e.currentTarget.style.background.includes(
                  "linear-gradient"
                )
              ) {
                e.currentTarget.style.background =
                  "rgba(255,255,255,0.06)";
              }
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "translateX(0px)";

              if (
                !e.currentTarget.style.background.includes(
                  "linear-gradient"
                )
              ) {
                e.currentTarget.style.background =
                  "transparent";
              }
            }}
          >
            {menu.icon}
            {menu.name}
          </NavLink>
        ))}
      </div>

      {/* Footer */}
      <div
        style={{
          marginTop: "auto",
          paddingTop: "20px",
          fontSize: "12px",
          color: "#9ca3af",
          textAlign: "center",
        }}
      >
        © 2026 NurseShift Panel
      </div>
    </div>
  );
}