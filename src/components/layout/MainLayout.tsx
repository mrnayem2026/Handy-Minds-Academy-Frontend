import { Button, Layout } from "antd";
import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";
import { useAppDispatch } from "../../redux/hooks";
import { logOut } from "../../redux/features/auth/authSlice";


const { Header, Content, Footer } = Layout;



const MainLayout = () => {
  const dispatch = useAppDispatch()

  const handleLogOut = () => {
    dispatch(logOut())
  }


  return (
    <Layout
      style={{
        height: "100vh",
      }}
    >
      {/* Side bar  */}
      <Sidebar></Sidebar>
      <Layout>
        <Header><Button className="text-white" onClick={handleLogOut}>Logout</Button> </Header>
        <Content style={{ margin: "24px 16px 0" }}>
          <div
            style={{
              padding: 24,
            }}
          >
            <Outlet></Outlet>
          </div>
        </Content>
        <Footer style={{ textAlign: "center" }}>
          Ant Design ©{new Date().getFullYear()} Created by Ant UED
        </Footer>
      </Layout>
    </Layout>
  );
};

export default MainLayout;
