import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div className="flex items-center justify-center h-screen bg-gray-100 px-4">
      <div className="text-center">
        <h1 className="text-9xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-red-700 to-red-600 drop-shadow-lg">
          404
        </h1>
        <p className="mt-4 text-2xl font-semibold text-gray-800">
          Page Not Found
        </p>
        <p className="mt-2 text-gray-600">
          Sorry, the page you’re looking for doesn’t exist.
        </p>
        <Link
          to="/"
          className="inline-block mt-6 px-6 py-3 text-white bg-blue-600 hover:bg-blue-700 rounded-lg shadow transition duration-200"
        >
          Go Home
        </Link>
      </div>
    </div>
  );
};

export default NotFound;