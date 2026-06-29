import { Link } from "react-router-dom";

function LessonCard({ lesson }) {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">

      {lesson.image && (
        <img
          src={lesson.image}
          alt={lesson.title}
          className="w-full h-48 object-cover"
        />
      )}

      <div className="p-4">

        <h3 className="text-xl font-bold">
          {lesson.title}
        </h3>

        <p className="text-gray-600 mt-2">
          {lesson.content}
        </p>

        <div className="mt-4 flex justify-between items-center">

          <span className="text-sm bg-blue-100 px-3 py-1 rounded">
            {lesson.language}
          </span>

          <Link
            to={`/quiz/${lesson._id}`}
            className="bg-blue-600 text-white px-4 py-2 rounded"
          >
            Start Quiz
          </Link>

        </div>

      </div>

    </div>
  );
}

export default LessonCard;
