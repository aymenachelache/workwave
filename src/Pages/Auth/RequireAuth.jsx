import { Navigate, Outlet } from 'react-router-dom';



export default function RequireAuth() {
  const user = localStorage.getItem("email");
  return (
    user ? <Outlet /> : <Navigate to="/login" />
  )
}
