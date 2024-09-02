import MyAllBookings from "../pages/UserInfoPage/MyAllBookings";
import UserDashboard from "../tempCompo/UserDashboard";
export const userPaths = [
  {
    name: "My Dashboard",
    path: "dashboard",
    element: <UserDashboard />,
  },
  {
    name: "My All Bookings",
    path: "my-all-bookings",
    element: <MyAllBookings />,
  },
];
