import { useNavigate  } from 'react-router-dom';
import { Menu } from "antd";
import { HomeOutlined, FilterOutlined, CheckCircleOutlined } from '@ant-design/icons';

export default () => {
  let navigate = useNavigate();
  const onClickHandler = (item) => navigate("/"+item.key.trim(), { replace: true });
  const items = [
    { label: 'Home', key:"home", icon:<HomeOutlined />},
    { label: 'Filter', key:"filter", icon:<FilterOutlined /> },
    { label: 'Artist', key:"artist", icon:<CheckCircleOutlined /> }
  ];
  return <Menu mode="horizontal" 
          defaultSelectedKeys={['home']}
          className='navbar'
          items={items} 
          onClick={ onClickHandler }/>;
};