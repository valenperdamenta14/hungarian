import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  Stethoscope,
  User,
  Lock,
  Eye,
  EyeOff,
} from "lucide-react";

import api from "../api/api";

export default function Login() {
  const navigate = useNavigate();

  const [showPassword, setShowPassword] = useState(false);

  const [loading, setLoading] = useState(false);

  const [error, setError] = useState("");

  const [form, setForm] = useState({
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

  const handleLogin = async (e) => {
    e.preventDefault();

    if (!form.username || !form.password) {
      setError("Username dan password wajib diisi");
      return;
    }

    try {
      setLoading(true);
      setError("");

      const res = await api.post("/auth/login", {
        username: form.username,
        password: form.password,
      });

      localStorage.setItem(
        "token",
        res.data.token
      );

      localStorage.setItem(
        "user",
        JSON.stringify(res.data.user)
      );

      navigate("/dashboard");
    } catch (err) {
      setError(
        err.response?.data?.message ||
          "Login gagal, silakan coba lagi"
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-blue-50 flex items-center justify-center p-6">
      <div className="w-full max-w-md bg-white rounded-3xl shadow-xl p-8">
        {/* Logo */}
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
          Login ke Sistem Penjadwalan Shift Perawat
        </p>

        {/* Error */}
        {error && (
          <div className="mt-5 bg-red-100 border border-red-300 text-red-700 px-4 py-3 rounded-xl">
            {error}
          </div>
        )}

        <form
          onSubmit={handleLogin}
          className="mt-6 space-y-5"
        >
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
                  setShowPassword(!showPassword)
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

          {/* Tombol Login */}
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
              : "Login"}
          </button>
        </form>

        {/* Kembali */}
        <div className="text-center mt-6">
          <Link
            to="/"
            className="text-blue-600 hover:underline"
          >
            ← Kembali ke Landing Page
          </Link>
        </div>
      </div>
    </div>
  );
}