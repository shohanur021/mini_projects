import React from "react";
import { useState } from "react";

const Age_calculator = () => {
  const [dob, setDob] = useState("");
  const [age, setAge] = useState(null);
  const [error, setError] = useState("");
  const [showResult, setShowResult] = useState(false);

  const calculateAge = () => {
    if (!dob) return;

    const birthDate = new Date(dob);
    const today = new Date();

    if (birthDate > today) {
      setError("Date of birth cannot be in the future.");
      return;
    } else {
      setError("");
    }

    let years = today.getFullYear() - birthDate.getFullYear();
    let months = today.getMonth() - birthDate.getMonth();
    let days = today.getDate() - birthDate.getDate();

    if (days < 0) {
      months--;
      days += new Date(today.getFullYear(), today.getMonth(), 0).getDate();
    }

    if (months < 0) {
      years--;
      months += 12;
    }
     
    setShowResult(true);
    setAge({ years, months, days });
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-400 to-indigo-500 p-4">
      <div className="bg-white shadow-xl rounded-lg p-8 w-full max-w-md">
        <h1 className="text-3xl font-bold mb-6 text-center text-indigo-700">
          Age Calculator
        </h1>
        <input
          type="date"
          value={dob}
          onChange={(e) => {
            setDob(e.target.value);
            setShowResult(false);
            setError("");
          }}
          className={`w-full p-3 border rounded-md focus:outline-none focus:ring-2 ${
            error
              ? "border-red-500 focus:ring-red-400 mb-0"
              : "border-gray-300 mb focus:ring-indigo-400 mb-4"
          }`}
        />
        {error && <p className="text-red-500 text-sm mb-2">{error}</p>}
        <button
          onClick={calculateAge}
          className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-2 rounded-md transition duration-300"
        >
          Calculate Age
        </button>

        {(age && showResult) && (
          <div className="mt-6 text-center text-lg text-gray-700">
            <p>
              You are <span className="font-bold">{age.years}</span> years,{" "}
              <span className="font-bold">{age.months}</span> months, and{" "}
              <span className="font-bold">{age.days}</span> days old.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Age_calculator;
