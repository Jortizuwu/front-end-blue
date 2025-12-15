import { useAuthStore } from "@/store/auth";
import { Navigate, Outlet } from "react-router-dom";

export default function PrivateRoute() {
  const { token } = useAuthStore();
  return token ? <Outlet /> : <Navigate to="/" />;
}
