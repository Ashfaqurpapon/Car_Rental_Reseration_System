import { Layout } from "antd";
import { Outlet } from "react-router-dom";
// import { useAppDispatch } from "../../redux/feathers/hooks";
// import { logout } from "../../redux/feathers/auth/authSlice";
import Sidebar from "./Sidebar";

import NavbarUp from "../../pages/HomePage/Navbar/NavbarUp/NavbarUp";
import Navbar from "../../pages/HomePage/Navbar/Navbar";
const { Content } = Layout;
// import { adminSidebarItems } from "../../routes/admin.routes";

const MainLayout = () => {
  return <Navbar />;
};

export default MainLayout;
