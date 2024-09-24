
import { Link } from 'react-router-dom';

const NotFound = () => {
    return (
        <div className="flex items-center justify-center h-screen bg-base-200">
        <div className="text-center">
          <h1 className="text-9xl font-bold text-error">404</h1>
          <h2 className="text-4xl font-semibold mt-4 text-error-content">
            Page Not Found
          </h2>
          <p className="text-lg mt-2 text-base-content">
            The page you are looking for does not exist.
          </p>
          <Link to="/home" className="btn btn-primary mt-6">
            Go Back Home
          </Link>
        </div>
      </div>
    );
};

export default NotFound;