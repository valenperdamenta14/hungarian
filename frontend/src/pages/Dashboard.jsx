import { useEffect, useState } from "react";
import api from "../api/api";

import {
  Users,
  CalendarCheck,
  Activity,
  ClipboardList,
  Stethoscope,
} from "lucide-react";

export default function Dashboard() {
  const [stats, setStats] = useState({
    totalPerawat: 0,
    totalShift: 0,
    totalHistori: 0,
    totalUser: 0,
  });

  const loadDashboard = async () => {
    try {
      const res = await api.get(
        "/dashboard"
      );

      setStats(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    loadDashboard();
  }, []);

  const cards = [
    {
      title: "Total Pegawai",
      value: stats.totalPerawat,
      icon: Users,
      color: "text-blue-600",
      bg: "bg-blue-100",
    },
    {
      title: "Total Shift",
      value: stats.totalShift,
      icon: CalendarCheck,
      color: "text-green-600",
      bg: "bg-green-100",
    },
    {
      title: "Total User",
      value: stats.totalUser,
      icon: Activity,
      color: "text-orange-600",
      bg: "bg-orange-100",
    },
  ];

  return (
    <div className="p-6 bg-slate-50 min-h-screen">
      {/* Welcome */}
      <div className="bg-gradient-to-r from-blue-600 to-blue-500 rounded-3xl p-8 text-white shadow-lg mb-8">
        <div className="flex items-center gap-4">
          <div className="bg-white/20 p-4 rounded-2xl">
            <Stethoscope size={40} />
          </div>

          <div>
            <h2 className="text-2xl font-bold">
              Dashboard NurseShift
            </h2>

            <p className="text-blue-100 mt-1">
              Sistem Penjadwalan Shift Pegawai
              Menggunakan Metode Hungarian
            </p>
          </div>
        </div>
      </div>

      {/* Statistik */}
      <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-6">
        {cards.map((card, index) => {
          const Icon = card.icon;

          return (
            <div
              key={index}
              className="bg-white rounded-3xl p-6 shadow-sm border hover:shadow-lg transition"
            >
              <div
                className={`${card.bg} w-14 h-14 rounded-2xl flex items-center justify-center`}
              >
                <Icon
                  size={28}
                  className={card.color}
                />
              </div>

              <h3 className="text-slate-500 mt-4">
                {card.title}
              </h3>

              <h1 className="text-3xl font-bold text-slate-800 mt-1">
                {card.value}
              </h1>
            </div>
          );
        })}
      </div>
    </div>
  );
}