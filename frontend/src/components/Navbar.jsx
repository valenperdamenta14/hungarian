import { CircleUser, LogOut } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function Navbar() {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("role");

    navigate("/login");
  };

  return (
    <div className="h-16 bg-white border-b flex items-center justify-end px-6">
      <button
        onClick={handleLogout}
        className="flex items-center gap-2 px-4 py-2 rounded-xl hover:bg-red-50 text-red-600 transition"
      >
        <CircleUser size={20} />
        <span>Logout</span>
        <LogOut size={18} />
      </button>
    </div>
  );
}