import { Link, Outlet } from 'react-router-dom';
const ErrorPage = () => {
    return (
      <div>
        <Link to="/">Home</Link>
        <h1>404</h1>
        <p>Not Found</p>
      </div>
    );
  };

  export default ErrorPage;