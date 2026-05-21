import {
  Users,
  CalendarCheck,
  Activity,
  ClipboardList,
  ArrowUpRight,
} from "lucide-react";

const cards = [
  {
    title: "Total Perawat",
    value: "24",
    icon: <Users size={28} />,
    color: "#2563eb",
  },
  {
    title: "Total Shift",
    value: "3",
    icon: <CalendarCheck size={28} />,
    color: "#10b981",
  },
  {
    title: "Proses Optimasi",
    value: "12",
    icon: <Activity size={28} />,
    color: "#f59e0b",
  },
  {
    title: "Histori Jadwal",
    value: "120",
    icon: <ClipboardList size={28} />,
    color: "#8b5cf6",
  },
];

export default function Dashboard() {
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
          marginBottom: "30px",
        }}
      >
        <h1
          style={{
            margin: 0,
            fontSize: "34px",
            fontWeight: "700",
            color: "#111827",
          }}
        >
          Dashboard
        </h1>

        <p
          style={{
            marginTop: "8px",
            color: "#6b7280",
            fontSize: "16px",
          }}
        >
          Sistem Penjadwalan Perawat menggunakan Metode Hungarian
        </p>
      </div>

      {/* Statistik Cards */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
          gap: "24px",
          marginBottom: "35px",
        }}
      >
        {cards.map((card, index) => (
          <div
            key={index}
            style={{
              background: "white",
              borderRadius: "24px",
              padding: "24px",
              boxShadow: "0 10px 25px rgba(0,0,0,0.06)",
              border: "1px solid rgba(0,0,0,0.04)",
              transition: "0.3s",
              cursor: "pointer",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "translateY(-6px)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "translateY(0px)";
            }}
          >
            <div
              style={{
                width: "60px",
                height: "60px",
                borderRadius: "18px",
                background: `${card.color}15`,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: card.color,
                marginBottom: "18px",
              }}
            >
              {card.icon}
            </div>

            <h3
              style={{
                margin: 0,
                fontSize: "15px",
                color: "#6b7280",
                fontWeight: "500",
              }}
            >
              {card.title}
            </h3>

            <h1
              style={{
                margin: "10px 0 0",
                fontSize: "34px",
                color: "#111827",
              }}
            >
              {card.value}
            </h1>
          </div>
        ))}
      </div>

      {/* Main Content */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "2fr 1fr",
          gap: "24px",
        }}
      >
      </div>
    </div>
  );
}