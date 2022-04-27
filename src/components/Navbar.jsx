
import { Menu } from "antd";
import { HomeOutlined, FilterOutlined, CheckCircleOutlined } from '@ant-design/icons';

export default (props) => {
  return (
    <Menu mode="horizontal" defaultSelectedKeys={['home']}>
        <Menu.Item key="home" icon={<HomeOutlined />}>Home</Menu.Item>
        <Menu.Item key="filter" icon={<FilterOutlined />}>Filter</Menu.Item>
        <Menu.Item key="who" icon={<CheckCircleOutlined />}>Artist</Menu.Item>
        <Menu.SubMenu title="sub menu" key="SubMenu">
            <Menu.Item key="item4">item 4</Menu.Item>
        </Menu.SubMenu>
    </Menu>
  )
};