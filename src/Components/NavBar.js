import React from 'react';
import 'antd/dist/antd.css';
import {Menu} from 'antd';

import "./../Style/NavBar.css"

function NavBar() {
  return (
      <div>
        <div className="logo"/>
        <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['1']}
              style={{textAlign: 'right'}}>
          <Menu.Item key="1">Sell</Menu.Item>
          <Menu.Item key="2">Sign In</Menu.Item>
          <Menu.Item key="3">Sign Up</Menu.Item>
        </Menu>
      </div>
  );
}

export default NavBar;