import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="min-h-screen bg-gray-100">

      <div className="max-w-6xl mx-auto py-16 px-6">

        <h1 className="text-5xl font-bold text-blue-700 mb-5">
          Local Language Learning Platform
        </h1>

        <p className="text-lg text-gray-700 mb-10">
          Learn Marathi, Hindi and English through images,
          pronunciation audio and quizzes.
        </p>

        <div className="grid md:grid-cols-3 gap-6">

          <div className="bg-white rounded-xl shadow p-6">
            <h2 className="text-2xl font-bold mb-3">
              🇮🇳 Marathi
            </h2>

            <p>
              Learn Vowels, Consonants, Barakhadi,
              Numbers, Colors and Grammar.
            </p>
          </div>

          <div className="bg-white rounded-xl shadow p-6">
            <h2 className="text-2xl font-bold mb-3">
              🇮🇳 Hindi
            </h2>

            <p>
              Learn Hindi alphabet, pronunciation
              and quizzes.
            </p>
          </div>

          <div className="bg-white rounded-xl shadow p-6">
            <h2 className="text-2xl font-bold mb-3">
              🇬🇧 English
            </h2>

            <p>
              Learn alphabet, words,
              grammar and pronunciation.
            </p>
          </div>

        </div>

        <div className="mt-10">

          <Link
            to="/register"
            className="bg-blue-600 text-white px-6 py-3 rounded-lg"
          >
            Get Started
          </Link>

        </div>

      </div>

    </div>
  );
}

export default Home;
