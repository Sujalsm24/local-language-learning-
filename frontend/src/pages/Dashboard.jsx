import { Link } from "react-router-dom";

function Dashboard() {
  const user = JSON.parse(localStorage.getItem("user"));

  return (
    <div className="max-w-6xl mx-auto p-6">

      <h1 className="text-3xl font-bold mb-6">
        Student Dashboard
      </h1>

      <div className="bg-white shadow rounded-lg p-6 mb-6">

        <h2 className="text-xl font-semibold">
          Welcome, {user?.name || "Student"} 👋
        </h2>

        <p className="mt-2">
          Selected Language:
          <span className="font-bold ml-2">
            {user?.selectedLanguage}
          </span>
        </p>

      </div>

      <div className="grid md:grid-cols-3 gap-5">

        <Link
          to="/lessons"
          className="bg-blue-600 text-white rounded-lg p-6 text-center"
        >
          📚 Lessons
        </Link>

        <Link
          to="/progress"
          className="bg-green-600 text-white rounded-lg p-6 text-center"
        >
          📈 Progress
        </Link>

        <Link
          to="/admin"
          className="bg-purple-600 text-white rounded-lg p-6 text-center"
        >
          ⚙ Admin
        </Link>

      </div>

    </div>
  );
}

export default Dashboard;
