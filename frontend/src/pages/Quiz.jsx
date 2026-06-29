import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import API from "../api/axios";
import QuizCard from "../components/QuizCard";

function Quiz() {

  const { lessonId } = useParams();

  const [questions, setQuestions] = useState([]);
  const [answers, setAnswers] = useState({});
  const [result, setResult] = useState(null);

  useEffect(() => {
    fetchQuiz();
  }, []);

  const fetchQuiz = async () => {
    const res = await API.get(`/quizzes/${lessonId}`);
    setQuestions(res.data.quizzes);
  };

  const handleAnswer = (id, option) => {
    setAnswers({
      ...answers,
      [id]: option,
    });
  };

  const submitQuiz = async () => {
    const res = await API.post(
      `/quizzes/submit/${lessonId}`,
      { answers }
    );

    setResult(res.data);
  };

  return (
    <div className="max-w-5xl mx-auto p-6">

      <h1 className="text-3xl font-bold mb-6">
        Quiz
      </h1>

      {questions.map((q) => (
        <div key={q._id} className="mb-6">
          <QuizCard
            question={q.question}
            options={q.options}
            selectedAnswer={answers[q._id]}
            onSelect={(option) =>
              handleAnswer(q._id, option)
            }
          />
        </div>
      ))}

      <button
        onClick={submitQuiz}
        className="bg-blue-600 text-white px-6 py-3 rounded"
      >
        Submit Quiz
      </button>

      {result && (
        <div className="mt-8 bg-green-100 p-5 rounded">

          <h2 className="text-2xl font-bold">
            Score: {result.score}/{result.totalQuestions}
          </h2>

          <p>
            Percentage: {result.percentage}%
          </p>

        </div>
      )}

    </div>
  );
}

export default Quiz;
