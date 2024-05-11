import { Navigate, Outlet } from 'react-router-dom';

export default function RequireAuth() {
  const user = localStorage.getItem("email");
  const isVerified = localStorage.getItem("verified") === 'true'; // Check for the string 'true'

  // Redirect to "/" if user is not found, otherwise check verification status
  return user ? (isVerified ? <Outlet /> : <Navigate to={'/emailverification'} />) : <Navigate to={'/'} />;
}
