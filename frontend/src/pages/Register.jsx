import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  Stethoscope,
  User,
 Lock,
 Eye,
 EyeOff,
 UserRound,
} from "lucide-react";

import api from "../api/api";

export default function Register() {
  const navigate = useNavigate();

  const [showPassword, setShowPassword] =
    useState(false);

  const [loading, setLoading] =
    useState(false);

  const [error, setError] = useState("");

  const [success, setSuccess] =
    useState("");

  const [form, setForm] = useState({
    nama: "",
    username: "",
    password: "",
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });

    setError("");
  };

  const handleRegister = async (e) => {
    e.preventDefault();

    if (
      !form.nama ||
      !form.username ||
      !form.password
    ) {
      setError("Semua field wajib diisi");
      return;
    }

    if (form.password.length < 6) {
      setError(
        "Password minimal 6 karakter"
      );
      return;
    }

    try {
      setLoading(true);
      setError("");

      await api.post("/auth/register", {
        ...form,
        role: "admin",
      });

      setSuccess(
        "Registrasi berhasil, silakan login."
      );

      setTimeout(() => {
        navigate("/login");
      }, 1500);
    } catch (err) {
      setError(
        err.response?.data?.message ||
          "Registrasi gagal"
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-blue-50 flex items-center justify-center p-6">
      <div className="w-full max-w-md bg-white rounded-3xl shadow-xl p-8">

        <div className="flex justify-center mb-6">
          <div className="bg-blue-600 p-4 rounded-2xl">
            <Stethoscope
              size={32}
              className="text-white"
            />
          </div>
        </div>

        <h1 className="text-3xl font-bold text-center text-slate-800">
          NurseShift
        </h1>

        <p className="text-center text-slate-500 mt-2">
          Registrasi Akun
        </p>

        {error && (
          <div className="mt-5 bg-red-100 border border-red-300 text-red-700 px-4 py-3 rounded-xl">
            {error}
          </div>
        )}

        {success && (
          <div className="mt-5 bg-green-100 border border-green-300 text-green-700 px-4 py-3 rounded-xl">
            {success}
          </div>
        )}

        <form
          onSubmit={handleRegister}
          className="mt-6 space-y-5"
        >
          {/* Nama */}

          <div>
            <label className="block text-sm font-medium text-slate-700 mb-2">
              Nama Lengkap
            </label>

            <div className="relative">
              <UserRound
                size={18}
                className="absolute left-3 top-3.5 text-slate-400"
              />

              <input
                type="text"
                name="nama"
                value={form.nama}
                onChange={handleChange}
                placeholder="Masukkan nama"
                className="w-full border rounded-xl pl-10 pr-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
          </div>

          {/* Username */}

          <div>
            <label className="block text-sm font-medium text-slate-700 mb-2">
              Username
            </label>

            <div className="relative">
              <User
                size={18}
                className="absolute left-3 top-3.5 text-slate-400"
              />

              <input
                type="text"
                name="username"
                value={form.username}
                onChange={handleChange}
                placeholder="Masukkan username"
                className="w-full border rounded-xl pl-10 pr-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
          </div>

          {/* Password */}

          <div>
            <label className="block text-sm font-medium text-slate-700 mb-2">
              Password
            </label>

            <div className="relative">
              <Lock
                size={18}
                className="absolute left-3 top-3.5 text-slate-400"
              />

              <input
                type={
                  showPassword
                    ? "text"
                    : "password"
                }
                name="password"
                value={form.password}
                onChange={handleChange}
                placeholder="Masukkan password"
                className="w-full border rounded-xl pl-10 pr-12 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />

              <button
                type="button"
                onClick={() =>
                  setShowPassword(
                    !showPassword
                  )
                }
                className="absolute right-3 top-3 text-slate-500"
              >
                {showPassword ? (
                  <EyeOff size={18} />
                ) : (
                  <Eye size={18} />
                )}
              </button>
            </div>
          </div>

          <button
            type="submit"
            disabled={loading}
            className={`w-full py-3 rounded-xl font-semibold text-white transition ${
              loading
                ? "bg-blue-400 cursor-not-allowed"
                : "bg-blue-600 hover:bg-blue-700"
            }`}
          >
            {loading
              ? "Memproses..."
              : "Daftar"}
          </button>
        </form>

        <div className="text-center mt-6">
          Sudah punya akun?{" "}
          <Link
            to="/login"
            className="text-blue-600 hover:underline"
          >
            Login
          </Link>
        </div>
      </div>
    </div>
  );
}