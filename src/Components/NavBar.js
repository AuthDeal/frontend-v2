import React from 'react';
import 'antd/dist/antd.css';
import {Menu} from 'antd';

import { Link,} from "react-router-dom";

import "./../Style/NavBar.css"


function NavBar() {
  return (
      <div>
        <div className="logo"/>
        <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['1']}
              style={{textAlign: 'right'}}>
          <Menu.Item key="1">
            <Link to="/sell">Sell</Link>
          </Menu.Item>
          <Menu.Item key="2">
            <Link to="/login">Sign In</Link>
          </Menu.Item>
          <Menu.Item key="3">
            <Link to="/signup">Sign Up</Link>
            </Menu.Item>
        </Menu>
      </div>
  );
}


export default NavBar;