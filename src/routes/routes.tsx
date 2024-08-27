import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import { routeGenerator } from "../utils/routesGenerator";
import { adminPaths } from "./admin.routes";
import { userPaths } from "./user.routes";
import SignUpPage from "../AuthPages/SignUpPage";
import CarSignIn from "../AuthPages/CarSignIn";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/admin",
    element: <App />,
    children: routeGenerator(adminPaths),
  },
  {
    path: "/user",
    element: <App />,
    children: routeGenerator(userPaths),
  },
  {
    path: "/signUp",
    element: <SignUpPage />,
  },
  {
    path: "/carSignIn",
    element: <CarSignIn />,
  },
]);
export default router;
