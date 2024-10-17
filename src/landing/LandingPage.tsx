import { Link } from "react-router-dom";

export function LandingPage() {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="bg-white p-10 rounded-lg shadow-lg max-w-md w-full">
        <h1 className="text-3xl font-bold text-center text-blue-600 mb-4">
          Welcome to My Tailwind App!
        </h1>
        <p className="text-gray-700 text-center mb-6">
          This is a simple page built with React and styled using Tailwind CSS.
        </p>
        <Link to={'/items'} className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition">
          Get Started
        </Link>
      </div>
    </div>
  );
}

