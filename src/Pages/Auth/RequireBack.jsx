import Cookie from "cookie-universal";
import { Navigate, Outlet } from "react-router-dom";

export default function RequireBack() {
    const cookie = Cookie();
    const user = cookie.get("email");
    return (
        user ? <Navigate to="/" /> : <Outlet />
    )
}
