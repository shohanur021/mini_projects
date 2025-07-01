import { useEffect, useState } from "react";

const CurrencyConverter = () => {
  const [amount, setAmount] = useState(100);
  const [fromCurrency, setFromCurrency] = useState("AUD");
  const [toCurrency, setToCurrency] = useState("BDT");
  const [result, setResult] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [currencyOptions, setCurrencyOptions] = useState([]);
  const [leftFlag, setLeftFlag] = useState(
    "https://flagsapi.com/AU/shiny/32.png"
  );
  const [rightFlag, setRightFlag] = useState(
    "https://flagsapi.com/BD/shiny/32.png"
  );

  useEffect(() => {
    // Fetch currency codes dynamically
    const loadCurrencies = async () => {
      try {
        const res = await fetch(
          `https://api.exchangerate-api.com/v4/latest/USD`
        );
        if (!res.ok) throw new Error("Failed to load currencies");
        const data = await res.json();
        const options = Object.keys(data.rates);
        setCurrencyOptions(options);
      } catch (err) {
        setError(err.message);
      }
    };

    loadCurrencies();
  }, []);

  const handleConvert = async () => {
    setLoading(true);
    setError("");
    setResult("");

    try {
      const res = await fetch(
        `https://api.exchangerate-api.com/v4/latest/${fromCurrency}`
      );
      if (!res.ok) throw new Error("Failed to fetch rates");
      const data = await res.json();
      
      const rate = data.rates[toCurrency];
      if (!rate) throw new Error("Invalid currency");

      const converted = amount * rate;
      const formatted = converted.toFixed(2);
      setResult(`${amount} ${fromCurrency} = ${formatted} ${toCurrency}`);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const handleSwap = () => {
    setFromCurrency(toCurrency);
    setToCurrency(fromCurrency);
    setLeftFlag(rightFlag);
    setRightFlag(leftFlag);
    setResult("");
    setError("");
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-black via-purple-900 to-blue-900">
      <div className="bg-black bg-opacity-50 backdrop-blur-md p-8 rounded-xl shadow-lg text-white w-[350px] sm:w-[430px] md:w-[500px]">
        <h1 className="text-2xl font-bold mb-6 text-center">
          Currency Converter
        </h1>

        <label className="block text-sm mb-1">Enter Amount</label>
        <input
          type="number"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          className="w-full p-2 rounded bg-gray-800 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 mb-4"
        />

        <div className="flex justify-between items-center mb-4">
          <div className="w-5/12">
            <label className="block text-sm mb-1">From</label>
            <div className="flex rounded bg-gray-800 pl-2">
              <img src={leftFlag} alt="flag" />
              <select
                value={fromCurrency}
                onChange={(e) => {
                  setFromCurrency(e.target.value);
                  const flag_code = e.target.value.slice(0, 2);
                  setLeftFlag(`https://flagsapi.com/${flag_code}/shiny/32.png`);
                }}
                className="w-full p-2  bg-gray-800"
              >
                {currencyOptions.map((currency_name, index) => (
                  <option key={index} value={currency_name}>
                    {currency_name}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <div className="flex flex-col items-center justify-center w-2/12">
            <button
              onClick={handleSwap}
              className=" text-lg h-10 hover:text-gray-700 bg-cyan-600 text-white px-3 py-2 rounded-full hover:scale-105 transition duration-300 ease-in-out"
              title="Swap currencies"
            >
              ⇄
            </button>
          </div>

          <div className="w-5/12">
            <label className="block text-sm mb-1">To</label>
            <div className="flex rounded bg-gray-800 pl-2">
              <img src={rightFlag} alt="flag" />
              <select
                value={toCurrency}
                onChange={(e) => {
                  setToCurrency(e.target.value);
                  const flag_code = e.target.value.slice(0, 2);
                  setRightFlag(`https://flagsapi.com/${flag_code}/shiny/32.png`);
                }}
                className="w-full p-2  bg-gray-800"
              >
                {currencyOptions.map((currency_name, index) => (
                  <option key={index} value={currency_name}>
                    {currency_name}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>

        <button
          onClick={handleConvert}
          className="w-full py-2 rounded bg-white text-black font-semibold hover:bg-gray-200 disabled:opacity-50"
          disabled={loading || currencyOptions.length === 0}
        >
          {loading ? "Converting..." : "Get Exchange Rate"}
        </button>

        {result && (
          <div className="mt-4 bg-gray-900 bg-opacity-60 p-3 rounded text-center">
            {result}
          </div>
        )}

        {error && (
          <div className="mt-4 bg-red-800 bg-opacity-70 p-2 rounded text-center text-sm">
            {error}
          </div>
        )}
      </div>
    </div>
  );
};

export default CurrencyConverter;
