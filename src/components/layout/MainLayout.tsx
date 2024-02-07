import { Layout, Menu, MenuProps } from 'antd';

const { Header, Content, Footer, Sider } = Layout;


const items:MenuProps["items"] = [
  {
    key:1,
    label:"Dashboards"
  },
  {
    key:2,
    label:"Profile"
  },
  {
    key:3,
    label:"Menu"
  },
]

const MainLayout = () => {
  return (
    <Layout style={{
      height:'100vh'
    }}>
      <Sider
        breakpoint="lg"
        collapsedWidth="0"
        onBreakpoint={(broken) => {
          console.log(broken);
        }}
        onCollapse={(collapsed, type) => {
          console.log(collapsed, type);
        }}
      >
        <div className="demo-logo-vertical" >
          <h1 className='text-white text-2xl font-bold p-2'>HM Academy</h1>
        </div>
        <Menu
          theme="dark"
          mode="inline"
          defaultSelectedKeys={["4"]}
          items={items}
        />
      </Sider>
      <Layout>
        <Header style={{ padding: 0 }} />
        <Content style={{ margin: "24px 16px 0" }}>
          <div
            style={{
              padding: 24,
            }}
          >
            content
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
