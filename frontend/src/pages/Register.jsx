import { useState } from "react";
import { useNavigate } from "react-router-dom";
import API from "../api/axios";

function Register() {

  const navigate = useNavigate();

  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    selectedLanguage: "Marathi",
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

      await API.post("/auth/register", form);

      alert("Registration Successful");

      navigate("/login");

    } catch (err) {
      alert(
        err.response?.data?.message ||
          "Registration failed"
      );
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">

      <form
        onSubmit={handleSubmit}
        className="bg-white p-8 rounded-lg shadow-lg w-96"
      >

        <h2 className="text-3xl font-bold mb-6">
          Register
        </h2>

        <input
          name="name"
          placeholder="Full Name"
          onChange={handleChange}
          className="w-full border p-3 rounded mb-3"
          required
        />

        <input
          type="email"
          name="email"
          placeholder="Email"
          onChange={handleChange}
          className="w-full border p-3 rounded mb-3"
          required
        />

        <input
          type="password"
          name="password"
          placeholder="Password"
          onChange={handleChange}
          className="w-full border p-3 rounded mb-3"
          required
        />

        <select
          name="selectedLanguage"
          onChange={handleChange}
          className="w-full border p-3 rounded mb-4"
        >
          <option>Marathi</option>
          <option>Hindi</option>
          <option>English</option>
        </select>

        <button className="w-full bg-green-600 text-white py-3 rounded">
          Register
        </button>

      </form>

    </div>
  );
}

export default Register;
