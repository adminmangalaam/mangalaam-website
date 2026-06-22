import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

export default function Login() {
  const navigate = useNavigate();

  const handleLogin = () => {
    if(!window.localStorage.getItem("isAdmin")) {
        window.localStorage.setItem("isAdmin", "true");
        navigate("/admin/dashboard");
    }
  };

  useEffect(() => {
    if(window.localStorage.getItem("isAdmin")) {
      navigate("/admin/dashboard");
    }
  }, []);

  return (
    <div className="max-w-7xl mx-auto px-4 md:w-1/2 lg:w-1/3 mt-10">
      <form onSubmit={handleLogin}>
        <div className="flex flex-col gap-2 mb-4">
            <label htmlFor="username">Username</label>
            <input className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-gold" type="text" placeholder="Username" id="username" />
        </div>
        <div className="flex flex-col gap-2 mb-4">
            <label htmlFor="password">Password</label>
            <input className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-gold" type="password" placeholder="Password" id="password" />
        </div>
        <button className="bg-gold text-dark px-8 py-3 rounded font-semibold hover:bg-yellow-400 transition" type="submit">Login</button>
      </form>
    </div>
  );
}