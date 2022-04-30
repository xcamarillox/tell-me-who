import { useNavigate  } from 'react-router-dom';
import { Menu } from "antd";
import { HomeOutlined, FilterOutlined, CheckCircleOutlined } from '@ant-design/icons';

export default (props) => {
  const navigate = useNavigate();
  const onClickHandler = (params) => {
    props.setSelectedPath(params.key.trim())
    navigate("/"+params.key.trim(), { replace: true })
  };
  const items = [
    { label: 'Home', key:"home", icon:<HomeOutlined />},
    { label: 'Filter', key:"filter", icon:<FilterOutlined /> },
    { label: 'Artist', key:"artist", icon:<CheckCircleOutlined /> }
  ];
  return <Menu mode="horizontal" 
          selectedKeys={[props.selectedPath]}
          className='navbar'
          items={items} 
          onClick={ onClickHandler }/>;
};