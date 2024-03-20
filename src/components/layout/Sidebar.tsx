import { Layout, Menu } from "antd";
const { Sider } = Layout;
import { adminPaths } from "../../routes/admin.route";
import sidebarItemsGenerator from "../../utils/sidebarItemsGenerator";
import { TUserRole } from "../../types";
import { facultyPaths } from "../../routes/faculty.route";
import { studentPath } from "../../routes/student.route";
import { useAppSelector } from "../../redux/hooks";
import { useCurrentUser } from "../../redux/features/auth/authSlice";

const userRole: TUserRole = {
  ADMIN: "admin",
  FACULTY: "faculty",
  STUDENT: "student",
};

const Sidebar = () => {
  const user = useAppSelector(useCurrentUser)
  
  let sidebarItem;

  switch (user!.role) {
    case userRole.ADMIN:
      sidebarItem = sidebarItemsGenerator(adminPaths, userRole.ADMIN);
      break;
    case userRole.FACULTY:
      sidebarItem = sidebarItemsGenerator(facultyPaths, userRole.FACULTY);
      break;
    case userRole.STUDENT:
      sidebarItem = sidebarItemsGenerator(studentPath, userRole.STUDENT);
      break;

    default:
      break;
  }

  return (
    <Sider breakpoint="lg" collapsedWidth="0">
      <div className="demo-logo-vertical">
        <h1 className="text-white text-2xl font-bold p-2">HM Academy</h1>
      </div>
      <Menu
        theme="dark"
        mode="inline"
        defaultSelectedKeys={["4"]}
        items={sidebarItem}
      />
    </Sider>
  );
};

export default Sidebar;
