import { useState } from "react";

const RecipeCard = ({ info }) => {
  const [expanded, setExpanded] = useState(false);

  const name = info.strCategory;
  const image = info.strCategoryThumb;
  const description = info.strCategoryDescription;

  return (
    <div className="w-[300px] mx-6 bg-gray-200 rounded-2xl shadow-lg overflow-auto hover:shadow-2xl transition-shadow duration-300 mb-7 flex flex-col">
      <img
        className="w-full h-48 object-cover"
        src={image}
        alt="Recipe"
      />
      <div className="p-4 bg-gray-600 text-white flex-1 transition-all duration-300">
        <h2 className="text-xl font-semibold text-white mb-2">
          {name}
        </h2>

        <p className="mt-2 text-sm">
          {expanded 
            ? description 
            : description.slice(0, 140) + (description.length > 150 ? "..." : "")
          }
          {description.length > 140 && (
            <span
              className="ml-2 text-blue-300 cursor-pointer x"
              onClick={() => setExpanded(!expanded)}
            >
              {expanded ? "see less" : "see more"}
            </span>
          )}
        </p>
      </div>
    </div>
  );
};

export default RecipeCard;