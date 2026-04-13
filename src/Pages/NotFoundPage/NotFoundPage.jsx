// NotFound.jsx
import { Link } from "react-router-dom";

const NotFoundPage = () => {
  return (
    <div className="flex flex-col justify-center items-center h-screen text-center bg-gray-100">
      
      <h1 className="text-7xl font-bold text-red-500">404</h1>
      
      <p className="text-xl mt-4 text-gray-700">
        Oops! Page not found
      </p>

      <Link
        to="/"
        className="mt-6 px-6 py-2 bg-blue-500 text-white rounded-lg shadow hover:bg-blue-600"
      >
        Go Home
      </Link>

    </div>
  );
};

export default NotFoundPage;