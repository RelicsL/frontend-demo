import React from 'react';
import { Menu, Icon, Dropdown } from 'antd';
import './index.less';
import { Link } from 'react-router-dom';
import { baseInject } from '../History/history';
import { cookie } from '../Cookie';

@baseInject
export class Navbar extends React.Component{
  get path(){
    return this.props.location.pathname;
  }

  get stores(){
    return this.props.stores;
  }

  setActiveLink(){
    if(this.path.includes('news')){
      this.stores.setLinkSelected('news');
    }else if(this.path.includes('scenery')){
      this.stores.setLinkSelected('scenery');
    }else if(this.path.includes('search')){
      this.stores.setLinkSelected('search');
    }else if(this.path.includes('learning')){
      this.stores.setLinkSelected('learning');
    }else if(this.path.includes('forum')){
      this.stores.setLinkSelected('forum')
    }else{
      this.stores.setLinkSelected('')
    }
    if(this.path.includes('login')){
      this.stores.setLoginSelected('login')
    }else if(this.path.includes('register')){
      this.stores.setLoginSelected('register')
    }else{
      this.stores.setLoginSelected('')
    }
  }

  componentDidUpdate(){
    this.setActiveLink();
  }
  
  componentWillMount(){
    this.setActiveLink();
  }

  render(){
    return (
      <header className="main-header">
        <header className="nav-bar">
          <div className="menu-with-logo">
            <img src="http://s2.bai.itc.cn/r/c/themes_v1310711076/global/cr/0001/i/head-cr.gif" alt="logo"/>
            <Menu
              mode="horizontal"
            >
              <Menu.Item key="learning" className={this.stores.linkSelected === 'learning' ? 'nav-link-active' : ''} >
                <Link to="/learning">校友学术</Link> 
              </Menu.Item>
              <Menu.Item key="news" className={this.stores.linkSelected === 'news' ? 'nav-link-active' : ''} >
                <Link to="/news">母校新闻</Link>
              </Menu.Item>
              <Menu.Item key="scenery" className={this.stores.linkSelected === 'scenery' ? 'nav-link-active' : ''} >
                <Link to="/scenery" >校园风光</Link>
              </Menu.Item>
              <Menu.Item key="search" className={this.stores.linkSelected === 'search' ? 'nav-link-active' : ''} >
                <Link to="/search">用户查找</Link>
              </Menu.Item>
              <Menu.Item key="forum" className={this.stores.linkSelected === 'forum' ? 'nav-link-active' : ''} >
                <Link to="/forum">校友论坛</Link>
              </Menu.Item>
            </Menu>
          </div>
          <div className="user-box">
            {
              !this.stores.username ? <div className="login-box">
                <Icon type="user" className={this.stores.loginSelected === 'login' ? 'nav-link-active' : ''}/>
                  <Link to="/login" className={this.stores.loginSelected === 'login' ? 'nav-link-active' : ''}>登陆 </Link>
                  <span>/</span>
                  <Link to="/register" className={this.stores.loginSelected === 'register' ? 'nav-link-active' : ''}> 注册</Link>
              </div> : <Dropdown
                overlay={
                  <Menu style={{width : '100px',textAlign:'center'}}>
                    <Menu.Item onClick={()=>{
                        cookie.removeCookie('user');
                        this.stores.setUsername(undefined);
                        this.props.history.push('/learning');
                      }} key="quit">
                      登出
                    </Menu.Item>
                  </Menu>
                }
                placement="bottomCenter"
              >
                <a onClick={(e)=>{e.preventDefault()}}>{this.stores.username}<Icon type="down" style={{ marginLeft : '5px'}}/></a>
              </Dropdown>
            }
          </div>
        </header>
      </header>
    )
  }
}
