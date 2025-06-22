import { useState } from "react";

const Word = () => {
  const [text, setText] = useState("");
  const [count, setCount] = useState(0);

  const countWord = (e) => {
    const newText = e.target.value;
    setText(newText);

    const words = newText.trim() === ""
      ? 0
      : newText.trim().replace(/\s+/g, " ").split(" ").length;

    setCount(words);
  };

  return (
    <div className="flex items-center justify-center h-screen">
      <div className="">
        <h2 className="font-bold font-serif my-3 text-purple-700 underline text-4xl text-center animate-pulse">Word Counter</h2>
        <label
          htmlFor="message"
          className="block mb-2 text-sm font-medium text-gray-600"
        >
          Your paragraph
        </label>
        <textarea
          id="message"
          value={text}
          onChange={countWord}
          placeholder="Write or paste your paragraph here..."
          className="w-80 md:w-96 lg:w-[500px] p-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          rows={5}
        />
        <p className="text-2xl  text-gray-700">Total words: <span className="font-bold text-gray-700">{count}</span></p>
      </div>
    </div>
  );
};

export default Word;

