import { Link } from "react-router-dom";

function Sidebar() {
  return (
    <aside className="w-64 min-h-screen bg-gray-800 text-white p-5">

      <h2 className="text-2xl font-bold mb-6">
        Student Panel
      </h2>

      <ul className="space-y-4">

        <li>
          <Link to="/dashboard">Dashboard</Link>
        </li>

        <li>
          <Link to="/lessons">Lessons</Link>
        </li>

        <li>
          <Link to="/progress">Progress</Link>
        </li>

        <li>
          <Link to="/admin">Admin</Link>
        </li>

      </ul>

    </aside>
  );
}

export default Sidebar;
