import { Layout } from "antd";
// import { Outlet } from "react-router-dom";
// import { useAppDispatch } from "../../redux/feathers/hooks";
// import { logout } from "../../redux/feathers/auth/authSlice";
import Sidebar from "./Sidebar";

import NavbarUp from "../../pages/HomePage/Navbar/NavbarUp/NavbarUp";
import Navbar from "../../pages/HomePage/Navbar/Navbar";
import CarListingPage from "../../pages/Car Listing Page/CarListingPage";
import { Outlet } from "react-router-dom";
import CarDetailsPage from "../../pages/Car Details Page/CarDetailsPage";

const { Content } = Layout;
// import { adminSidebarItems } from "../../routes/admin.routes";

const MainLayout = () => {
  return (
    <Layout style={{ height: "100vh" }}>
      <Sidebar />
      <Layout>
        <NavbarUp />
        <CarListingPage />
        <CarDetailsPage />
        <Content style={{ margin: "24px 16px 0" }}>
          <div
            style={{
              padding: 24,
              minHeight: 360,
            }}
          >
            <Outlet />
            {/* <Navbar /> */}
          </div>
        </Content>
      </Layout>
    </Layout>
  );
};

export default MainLayout;
