import { Layout } from "antd";
import { Outlet } from "react-router-dom";
// import { useAppDispatch } from "../../redux/feathers/hooks";
// import { logout } from "../../redux/feathers/auth/authSlice";
import Sidebar from "./Sidebar";

import NavbarUp from "../../pages/HomePage/Navbar/NavbarUp/NavbarUp";
const { Content } = Layout;
// import { adminSidebarItems } from "../../routes/admin.routes";

const MainLayout = () => {
  return (
    <Layout style={{ height: "100vh" }}>
      <Sidebar />
      <Layout>
        <NavbarUp />

        <Content style={{ margin: "24px 16px 0" }}>
          <div
            style={{
              padding: 24,
              minHeight: 360,
            }}
          >
            <Outlet />
          </div>
        </Content>
      </Layout>
    </Layout>
  );
};

export default MainLayout;
