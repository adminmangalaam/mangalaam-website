import { useNavigate } from "react-router-dom";

export default function Dashboard() {
  const navigate = useNavigate();

  return (
    <div className="max-w-7xl mx-auto px-4">
      <h1>Admin Dashboard</h1>
      <br />
        <button className="text-dark font-semibold underline hover:no-underline transition" onClick={() => {
            window.localStorage.removeItem("isAdmin");
            navigate("/login");
        }}>
            Logout
        </button>
    </div>
  );
}