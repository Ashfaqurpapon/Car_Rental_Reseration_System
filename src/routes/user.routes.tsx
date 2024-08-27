import Myprofile from "../pages/UserInfoPage/Myprofile";
import BokingDetails from "../tempCompo/BokingDetails";
import BookingForm from "../tempCompo/BookingForm";
import UserDashboard from "../tempCompo/UserDashboard";

export const userPaths = [
  {
    name: "Dashboard",
    path: "dashboard",
    element: <UserDashboard />,
  },
  {
    name: "User Management",
    children: [
      {
        name: "My Profile",
        path: "my-profile",
        element: <Myprofile />,
      },
      {
        name: "Booking Detals",
        path: "booking-details",
        element: <BokingDetails />,
      },
      {
        name: "Booking Form",
        path: "booking-form",
        element: <BookingForm />,
      },
    ],
  },
];
