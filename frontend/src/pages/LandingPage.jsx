import { Link } from "react-router-dom";
import {
  Stethoscope,
  Users,
  CalendarDays,
  Clock3,
  ArrowRight,
  ShieldCheck,
} from "lucide-react";

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-blue-50">
      {/* Navbar */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-8 py-4 flex justify-between items-center">
          <div className="flex items-center gap-3">
            <div className="bg-blue-600 p-3 rounded-xl">
              <Stethoscope className="text-white" size={24} />
            </div>

            <div>
              <h1 className="text-xl font-bold text-slate-800">
                NurseShift
              </h1>
              <p className="text-sm text-slate-500">
                Sistem Penjadwalan Shift Pegawai
              </p>
            </div>
          </div>

          <Link
            to="/login"
            className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded-xl transition"
          >
            Login
          </Link>
        </div>
      </header>

      {/* Hero */}
      <section className="max-w-7xl mx-auto px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Kiri */}
          <div>
            <span className="bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-semibold">
              Sistem Optimasi Penjadwalan
            </span>

            <h1 className="text-5xl font-bold text-slate-800 mt-6 leading-tight">
              Penjadwalan Shift Pegawai
              <span className="text-blue-600">
                {" "}
                Menggunakan Metode Hungarian
              </span>
            </h1>

            <p className="mt-6 text-lg text-slate-600 leading-relaxed">
              Membantu rumah sakit menentukan pembagian shift Pegawai
              secara optimal berdasarkan kebutuhan layanan, sehingga
              jadwal menjadi lebih efektif, efisien, dan adil.
            </p>
          </div>

          {/* Kanan */}
          <div>
            <div className="bg-white rounded-3xl shadow-xl p-10">
              <h3 className="text-2xl font-bold text-slate-800 mb-8">
                Ringkasan Sistem
              </h3>

              <div className="space-y-5">
                <div className="bg-blue-50 p-5 rounded-xl flex items-center gap-4">
                  <Users className="text-blue-600" size={40} />
                  <div>
                    <h4 className="font-semibold">
                      Data Pegawai
                    </h4>
                    <p className="text-slate-500 text-sm">
                      Mengelola seluruh data pegawai yang akan digunakan dalam proses penjadwalan.
                    </p>
                  </div>
                </div>

                <div className="bg-blue-50 p-5 rounded-xl flex items-center gap-4">
                  <Clock3 className="text-green-600" size={40} />
                  <div>
                    <h4 className="font-semibold">
                      Shift Kerja
                    </h4>
                    <p className="text-slate-500 text-sm">
                      Mengatur kebutuhan shift pagi, siang, malam, dan hari libur.
                    </p>
                  </div>
                </div>

                <div className="bg-blue-50 p-5 rounded-xl flex items-center gap-4">
                  <CalendarDays
                    className="text-purple-600"
                    size={40}
                  />
                  <div>
                    <h4 className="font-semibold">
                      Optimasi Hungarian
                    </h4>
                    <p className="text-slate-500 text-sm">
                      Penjadwalan otomatis terbaik.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-blue-700 text-white text-center py-6">
        <p>
          © 2026 NurseShift Optimizer | Sistem Penjadwalan Shift
          Pegawai
        </p>
      </footer>
    </div>
  );
}