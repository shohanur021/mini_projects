import { Link } from 'react-router-dom';

const Card = ( {item} ) => {

  return (
    <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 max-w-sm bg-white border border-gray-200 rounded-lg shadow-xl dark:bg-gray-800 dark:border-gray-700 hover:border-blue-300">

        <img
          className="rounded-t-lg w-full h-48 object-cover"
          src={item.image}
          alt="Card Image"
        />
      <div className="p-5">
        
          <h5 className="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white">
            {item.name}
          </h5>
       
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
          {item.description}
        </p>
        <Link
          to={`/${item.name}`}
          className="inline-flex items-center px-3 py-2 text-sm font-medium text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          use this
          <svg
            className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 14 10"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M1 5h12m0 0L9 1m4 4L9 9"
            />
          </svg>
        </Link>
      </div>
    </div>
  );
};

export default Card;
