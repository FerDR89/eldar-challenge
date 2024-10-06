import { Navigate, Outlet } from "react-router-dom";
import { useAppSelector } from "../hooks/useAppSelector";
import { selectAuth } from "../redux/slices/auth";
import { TRoles } from "../interfaces/roles";
import { selectUser } from "../redux/slices/user ";

interface IProtectedRoute {
  children?: React.ReactNode;
  redirectTo?: string;
  allowedRoles: TRoles[];
}

const ProtectedRoute = ({
  children,
  redirectTo = "/",
  allowedRoles,
}: IProtectedRoute) => {
  const { isAuthenticated } = useAppSelector(selectAuth);
  const { role: userRole } = useAppSelector(selectUser);

  if (!isAuthenticated) return <Navigate to={"/"} replace />;

  const hasPermission = allowedRoles.some((r) => userRole.includes(r));

  if (isAuthenticated && !hasPermission) {
    return <Navigate to={redirectTo} replace />;
  }

  return children ? children : <Outlet />;
};
export default ProtectedRoute;
