import { Navigate, Outlet } from 'react-router-dom';
import Cookie from "cookie-universal";



export default function RequireAuth() {
  const cookie = Cookie();
  const user = cookie.get("email");
  return (
    user ? <Outlet /> : <Navigate to="/login" />
  )
}
