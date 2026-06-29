import { useEffect, useState } from "react";
import API from "../api/axios";

function Admin() {
  const [lessons, setLessons] = useState([]);

  const [form, setForm] = useState({
    language: "Marathi",
    category: "Vowels",
    title: "",
    content: "",
    image: "",
    audio: "",
  });

  useEffect(() => {
    loadLessons();
  }, []);

  const loadLessons = async () => {
    try {
      const res = await API.get("/lessons");
      setLessons(res.data.lessons);
    } catch (err) {
      console.error(err);
    }
  };

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const addLesson = async (e) => {
    e.preventDefault();

    try {
      await API.post("/lessons", form);

      alert("Lesson Added Successfully");

      setForm({
        language: "Marathi",
        category: "Vowels",
        title: "",
        content: "",
        image: "",
        audio: "",
      });

      loadLessons();
    } catch (err) {
      alert(err.response?.data?.message || "Failed to add lesson");
    }
  };

  const deleteLesson = async (id) => {
    if (!window.confirm("Delete this lesson?")) return;

    try {
      await API.delete(`/lessons/${id}`);
      loadLessons();
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="max-w-7xl mx-auto p-6">

      <h1 className="text-3xl font-bold mb-6">
        Admin Panel
      </h1>

      {/* Add Lesson Form */}
      <form
        onSubmit={addLesson}
        className="bg-white shadow rounded-lg p-6 mb-8"
      >
        <h2 className="text-xl font-semibold mb-4">
          Add Lesson
        </h2>

        <div className="grid md:grid-cols-2 gap-4">

          <select
            name="language"
            value={form.language}
            onChange={handleChange}
            className="border p-3 rounded"
          >
            <option>Marathi</option>
            <option>Hindi</option>
            <option>English</option>
          </select>

          <select
            name="category"
            value={form.category}
            onChange={handleChange}
            className="border p-3 rounded"
          >
            <option>Vowels</option>
            <option>Consonants</option>
            <option>Alphabet</option>
            <option>Barakhadi</option>
            <option>Numbers</option>
            <option>Colors</option>
            <option>Grammar</option>
          </select>

          <input
            type="text"
            name="title"
            placeholder="Lesson Title"
            value={form.title}
            onChange={handleChange}
            className="border p-3 rounded"
            required
          />

          <input
            type="text"
            name="image"
            placeholder="Image URL"
            value={form.image}
            onChange={handleChange}
            className="border p-3 rounded"
          />

          <input
            type="text"
            name="audio"
            placeholder="Audio URL"
            value={form.audio}
            onChange={handleChange}
            className="border p-3 rounded"
          />

        </div>

        <textarea
          name="content"
          placeholder="Lesson Content"
          value={form.content}
          onChange={handleChange}
          rows="4"
          className="border p-3 rounded w-full mt-4"
          required
        />

        <button
          type="submit"
          className="mt-4 bg-blue-600 text-white px-6 py-3 rounded"
        >
          Add Lesson
        </button>
      </form>

      {/* Lesson List */}
      <div className="bg-white shadow rounded-lg p-6">

        <h2 className="text-xl font-semibold mb-4">
          Existing Lessons
        </h2>

        {lessons.length === 0 ? (
          <p>No lessons available.</p>
        ) : (
          <div className="space-y-4">
            {lessons.map((lesson) => (
              <div
                key={lesson._id}
                className="flex justify-between items-center border p-4 rounded"
              >
                <div>
                  <h3 className="font-bold">
                    {lesson.title}
                  </h3>

                  <p className="text-gray-600">
                    {lesson.language} • {lesson.category}
                  </p>
                </div>

                <button
                  onClick={() => deleteLesson(lesson._id)}
                  className="bg-red-600 text-white px-4 py-2 rounded"
                >
                  Delete
                </button>
              </div>
            ))}
          </div>
        )}

      </div>

    </div>
  );
}

export default Admin;
