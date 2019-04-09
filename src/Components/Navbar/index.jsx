import React from 'react';
import { Menu } from 'antd';
import './index.scss';
import { Link } from 'react-router-dom';
import { baseInject } from '../History/history';

@baseInject
class Navbar extends React.Component{
  get path(){
    return this.props.location.pathname;
  }

  get stores(){
    return this.props.stores;
  }

  componentDidMount(){
    if(this.path.includes('news')){
      this.stores.setLinkSelected('news')
    }else if(this.path.includes('scenery')){
      this.stores.setLinkSelected('scenery')
    }else if(this.path.includes('search')){
      this.stores.setLinkSelected('search')
    }else{
      this.stores.setLinkSelected('learning')
    }
  }

  render(){
    return (
      <header className="nav-bar">
        <div className="menu-with-logo">
          <img src="http://s2.bai.itc.cn/r/c/themes_v1310711076/global/cr/0001/i/head-cr.gif" alt="logo"/>
          <Menu
            mode="horizontal"
          >
            <Menu.Item key="learning" className={this.stores.linkSelected === 'learning' ? 'nav-link-active' : ''} onClick={()=>{this.stores.setLinkSelected('learning')}}>
              <Link to="/learning">校友学术</Link> 
            </Menu.Item>
            <Menu.Item key="news" className={this.stores.linkSelected === 'news' ? 'nav-link-active' : ''} onClick={()=>{this.stores.setLinkSelected('news')}}>
              <Link to="/news">母校新闻</Link>
            </Menu.Item>
            <Menu.Item key="scenery" className={this.stores.linkSelected === 'scenery' ? 'nav-link-active' : ''} onClick={()=>{this.stores.setLinkSelected('scenery')}}>
              <Link to="/scenery" >校园风光</Link>
            </Menu.Item>
            <Menu.Item key="search" className={this.stores.linkSelected === 'search' ? 'nav-link-active' : ''} onClick={()=>{this.stores.setLinkSelected('search')}}>
              <Link to="/search">用户查找</Link>
            </Menu.Item>
          </Menu>
        </div>
      </header>
    )
  }
}
export default Navbar