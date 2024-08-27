import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import { routeGenerator } from "../utils/routesGenerator";
import { adminPaths } from "./admin.routes";
import { userPaths } from "./user.routes";
import SignUpPage from "../AuthPages/SignUpPage";
import CarSignIn from "../AuthPages/CarSignIn";
import ProtectedRoute from "../PHForm/layout/ProtectedRoute";
import AboutUs from "../pages/AboutUs/AboutUs";
import BookingCar from "../pages/BookingCar/BookingCar";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <App />

      // <HomePageMain></HomePageMain>
    ),
  },
  {
    path: "/admin",
    element: (
      <ProtectedRoute role="admin">
        <App />
      </ProtectedRoute>
    ),
    children: routeGenerator(adminPaths),
  },
  {
    path: "/user",
    element: (
      <ProtectedRoute role="user">
        <App />
      </ProtectedRoute>
    ),
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
  {
    path: "/about",
    element: <AboutUs />,
  },
  {
    path: "/bookingCar",
    element: <BookingCar />,
  },
]);
export default router;
