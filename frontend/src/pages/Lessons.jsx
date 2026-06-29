import { useEffect, useState } from "react";
import API from "../api/axios";
import LessonCard from "../components/LessonCard";

function Lessons() {

  const [lessons, setLessons] = useState([]);

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

  return (
    <div className="max-w-7xl mx-auto p-6">

      <h1 className="text-3xl font-bold mb-6">
        Language Lessons
      </h1>

      <div className="grid md:grid-cols-3 gap-6">

        {lessons.map((lesson) => (
          <LessonCard
            key={lesson._id}
            lesson={lesson}
          />
        ))}

      </div>

    </div>
  );
}

export default Lessons;
