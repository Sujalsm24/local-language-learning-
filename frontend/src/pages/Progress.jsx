function Progress() {
  const user = JSON.parse(localStorage.getItem("user"));

  return (
    <div className="max-w-4xl mx-auto p-6">

      <h1 className="text-3xl font-bold mb-6">
        Progress
      </h1>

      <div className="bg-white rounded-lg shadow p-6">

        <p>
          <strong>Name:</strong> {user?.name}
        </p>

        <p className="mt-2">
          <strong>Language:</strong>{" "}
          {user?.selectedLanguage}
        </p>

        <div className="mt-6">

          <div className="bg-gray-200 rounded-full h-5">

            <div
              className="bg-green-600 h-5 rounded-full"
              style={{ width: "60%" }}
            ></div>

          </div>

          <p className="mt-2">
            60% Completed
          </p>

        </div>

      </div>

    </div>
  );
}

export default Progress;
