import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";

import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";
import Lessons from "./pages/Lessons";
import Quiz from "./pages/Quiz";
import Progress from "./pages/Progress";
import Admin from "./pages/Admin";

function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/login" element={<Login />} />

        <Route path="/register" element={<Register />} />

        <Route path="/dashboard" element={<Dashboard />} />

        <Route path="/lessons" element={<Lessons />} />

        <Route path="/quiz/:lessonId" element={<Quiz />} />

        <Route path="/progress" element={<Progress />} />

        <Route path="/admin" element={<Admin />} />
      </Routes>
    </>
  );
}

export default App;
