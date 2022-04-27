
import { Menu } from "antd";
import { HomeOutlined, FilterOutlined, CheckCircleOutlined } from '@ant-design/icons';

import { useNavigate  } from 'react-router-dom';

export default () => {

  let navigate = useNavigate();
  const onClickHandler = (item) => navigate("/"+item.key.trim(), { replace: true });
  const items = [
    { label: 'Home', key:"home", icon:<HomeOutlined />},
    { label: 'Filter', key:"filter", icon:<FilterOutlined /> },
    { label: 'Artist', key:"artist", icon:<CheckCircleOutlined /> },
    {
      label: 'sub menu',
      children: [{ label: 'item 3' }],
    },
  ];
  return <Menu mode="horizontal" defaultSelectedKeys={['home']} items={items} onClick={ onClickHandler }/>;
};