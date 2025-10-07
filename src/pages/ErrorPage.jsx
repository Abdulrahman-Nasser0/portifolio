import { useNavigate } from 'react-router-dom';

function ErrorPage() {
  const navigate = useNavigate();

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center">
          <h1 className="text-6xl font-bold text-gray-900 mb-4">404</h1>
          <h2 className="text-2xl font-semibold text-gray-700 mb-4">
            Oops! Page not found
          </h2>
          <p className="text-gray-600 mb-8">
            The page you are looking for might have been removed, had its name changed,
            or is temporarily unavailable.
          </p>
          <button 
            onClick={() => navigate('/')}
            className="bg-black hover:bg-gray-800 text-white font-bold py-3 px-6 rounded-lg transition-colors"
          >
            Go Back Home
          </button>
        </div>
    </div>
  );
}

export default ErrorPage;
