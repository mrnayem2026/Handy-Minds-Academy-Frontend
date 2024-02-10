import { Layout, Menu } from "antd";
const {  Sider } = Layout;
import { adminPaths } from "../../routes/admin.route";
import sidebarItemsGenerator from "../../utils/sidebarItemsGenerator";
const Sidebar = () => {
    return (
        <Sider
        breakpoint="lg"
        collapsedWidth="0"
      >
        <div className="demo-logo-vertical">
          <h1 className="text-white text-2xl font-bold p-2">HM Academy</h1>
        </div>
        <Menu
          theme="dark"
          mode="inline"
          defaultSelectedKeys={["4"]}
          items={sidebarItemsGenerator(adminPaths,"admin")}
        />
      </Sider>
    );
};

export default Sidebar;