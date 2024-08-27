import { ReactNode } from "react";
// import { useAppSelector } from "../../redux/feathers/hooks";
import { Navigate } from "react-router-dom";
import { useAppSelector } from "../../redux/hooks";
import {
  selectCurrentUser,
  useCurrentToken,
} from "../../redux/features/carAuthSlice";
// import { useCurrentToken } from "../../redux/feathers/auth/authSlice";

const ProtectedRoute = ({ children }: { children: ReactNode }) => {
  const token = useAppSelector(useCurrentToken);
  const user = useAppSelector(selectCurrentUser);
  console.log("Limon token");
  console.log(token);
  console.log(user);
  if (!token) {
    return <Navigate to="/carSignIn" replace={true} />;
  }

  return children;
};

export default ProtectedRoute;
