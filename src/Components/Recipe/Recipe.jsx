import { useEffect, useState } from "react";
import RecipeCard from "./RecipeCard";

const Recipe = () => {
  const [data, setData] = useState([]);

  const fetchdata = async () => {
    try {
      const response = await fetch(
        "https://www.themealdb.com/api/json/v1/1/categories.php"
      );
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      const result = await response.json();
      setData(result.categories);
    } catch (err) {
      console.error("There was a problem:", err.message);
    }
  };

  useEffect(() => {
    fetchdata();
  }, []);

  return (
    <div>
      <h1 className="text-2xl text-green-500 md:text-4xl md:text-red-500 font-bold text-center animate-pulse p-3">Food Category Details</h1>
      <div className="flex flex-wrap items-start justify-center p-4">
        {data.map((item, index) => {
          return <RecipeCard key={index} info={item}></RecipeCard>;
        })}
      </div>
    </div>
  );
};

export default Recipe;
