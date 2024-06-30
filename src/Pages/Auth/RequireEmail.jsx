import Cookie from "cookie-universal";
import { Outlet } from "react-router-dom";
import VerificationEmail from "../Website/verificationEmail/VerificationEmail";

export default function RequireEmail() {
    const cookie = Cookie();
    const verified = cookie.get("verified");

  return (
    verified ? <Navigate to="/" /> : <Outlet />
  )
}
