import { useState, useEffect } from "react/cjs/react.development";
import { useNavigate  } from 'react-router-dom';
import { Menu } from "antd";
import { HomeOutlined, FilterOutlined, CheckCircleOutlined } from '@ant-design/icons';

export default (props) => {
  const navigate = useNavigate();
  const [items, setItems] = useState([
    { label: 'Home', key:"home", icon:<HomeOutlined />},
    { label: 'Filter', key:"filter", icon:<FilterOutlined />, disabled:true },
    { label: 'Artist', key:"artist", icon:<CheckCircleOutlined />, disabled:true }
  ])

  useEffect(()=>{
      const [home, filter, artist] = items;
      setItems([
        home, 
        { label: 'Filter', key:"filter", icon:<FilterOutlined />, disabled: props.artistArr ? false : true }, 
        { label: 'Artist', key:"artist", icon:<CheckCircleOutlined />, disabled: props.moviesArr ? false : true }
      ])
  }, [props.artistArr, props.moviesArr])

  const onClickHandler = (params) => navigate("/"+params.key.trim(), { replace: true });
  
  return <Menu mode="horizontal" 
          selectedKeys={[props.selectedPath]}
          className='navbar'
          items={items} 
          onClick={ onClickHandler }/>;
};