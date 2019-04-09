import React from 'react';
import { Menu } from 'antd';
import './index.scss';
import { history } from '../History';

export class Navbar extends React.Component{
  render(){
    return (
      <header className="nav-bar">
        <div className="menu-with-logo">
          <img src="http://s2.bai.itc.cn/r/c/themes_v1310711076/global/cr/0001/i/head-cr.gif" alt="logo"/>
          <Menu
            // onClick={this.handleClick}
            // selectedKeys={[this.state.current]}
            mode="horizontal"
          >
            <Menu.Item onClick={()=>{console.log(history)}} key="校友学术">校友学术</Menu.Item>
            <Menu.Item key="母校新闻">母校新闻</Menu.Item>
            <Menu.Item key="校园风光">校园风光</Menu.Item>
            <Menu.Item key="用户查找">用户查找</Menu.Item>
          </Menu>
        </div>
      </header>
    )
  }
}