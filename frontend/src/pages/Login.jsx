import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import API from "../api/axios";

function Login() {

  const navigate = useNavigate();

  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {

      const res = await API.post("/auth/login", form);

      localStorage.setItem("token", res.data.token);

      localStorage.setItem(
        "user",
        JSON.stringify(res.data.user)
      );

      navigate("/dashboard");

    } catch (err) {
      alert(
        err.response?.data?.message || "Login failed"
      );
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">

      <form
        onSubmit={handleSubmit}
        className="bg-white p-8 rounded-lg shadow-lg w-96"
      >

        <h2 className="text-3xl font-bold mb-6 text-center">
          Login
        </h2>

        <input
          type="email"
          name="email"
          placeholder="Email"
          onChange={handleChange}
          className="w-full border p-3 rounded mb-4"
          required
        />

        <input
          type="password"
          name="password"
          placeholder="Password"
          onChange={handleChange}
          className="w-full border p-3 rounded mb-4"
          required
        />

        <button
          className="w-full bg-blue-600 text-white py-3 rounded"
        >
          Login
        </button>

        <p className="mt-4 text-center">
          Don't have an account?

          <Link
            className="text-blue-600 ml-1"
            to="/register"
          >
            Register
          </Link>

        </p>

      </form>

    </div>
  );
}

export default Login;
