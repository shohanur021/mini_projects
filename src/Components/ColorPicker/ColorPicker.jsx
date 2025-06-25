import { useState, useEffect, useRef } from "react";

const ColorPicker = () => {
  const [color, setColor] = useState("#6366f1");       
  const [tempColor, setTempColor] = useState("#6366f1"); 
  const [history, setHistory] = useState([]);
  const inputRef = useRef(null);

  useEffect(() => {
    setHistory((prev) => {
      const updated = [color, ...prev.filter((c) => c !== color)];
      return updated.slice(0, 10);
    });
  }, [color]);

  const handleCopy = () => {
    navigator.clipboard.writeText(color);
  };

  const handleBlur = () => {
    setColor(tempColor); 
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-bl from-purple-200 via-indigo-200 to-blue-200 p-6">
      <div className="bg-white rounded-2xl shadow-2xl p-8 w-full max-w-sm text-center">
        <h1 className="text-3xl font-semibold text-indigo-600 mb-8">🎨 Pick Your Color</h1>

        <div className="relative inline-block ">
          <input
            ref={inputRef}
            type="color"
            value={tempColor}
            onChange={(e) => setTempColor(e.target.value)}
            onBlur={handleBlur}
            className="appearance-none cursor-pointer w-40 h-40 border-1 rounded-xl transition-all duration-300"
          />
          <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2 text-sm bg-white px-4 py-1 rounded-full shadow text-gray-700 font-mono border">
            <p className="p-1 font-bold">{color.toUpperCase()}</p>
          </div>
        </div>

        <div className="mt-8">
          <button
            className="px-6 py-3 bg-indigo-600 text-white rounded-lg shadow hover:bg-indigo-700 transition duration-300 font-semibold"
            onClick={handleCopy}
          >
            Copy Color
          </button>
        </div>

        {history.length > 1 && (
          <div className="mt-10 text-left">
            <h2 className="text-sm font-medium text-gray-600 mb-2">Recent Colors:</h2>
            <div className="grid grid-cols-5 gap-3">
              {history.map((col, idx) => (
                <div
                  key={idx}
                  className="w-10 h-10 rounded-lg border cursor-pointer hover:scale-110 transition-transform shadow"
                  style={{ backgroundColor: col }}
                  title={col}
                  onClick={() => {
                    setTempColor(col);
                    setColor(col);   
                  }}
                />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ColorPicker;