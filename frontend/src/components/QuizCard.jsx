function QuizCard({
  question,
  options,
  selectedAnswer,
  onSelect,
}) {
  return (
    <div className="bg-white shadow rounded-lg p-6">

      <h2 className="text-xl font-semibold mb-4">
        {question}
      </h2>

      <div className="space-y-3">

        {options.map((option) => (
          <button
            key={option}
            onClick={() => onSelect(option)}
            className={`w-full text-left p-3 rounded border ${
              selectedAnswer === option
                ? "bg-blue-600 text-white"
                : "bg-gray-100"
            }`}
          >
            {option}
          </button>
        ))}

      </div>

    </div>
  );
}

export default QuizCard;
