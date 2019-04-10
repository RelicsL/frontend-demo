import React from 'react';
import { Tabs, Input, Button } from 'antd';

export class Search extends React.Component{


  render(){
    return (
      <Tabs>
        <Tabs.TabPane tab="用户查找" key="用户查找" >
          <div className="search-box" style={{textAlign:'center'}}>
            <Input.Search placeholder="请输入用户名" style={{width : '460px'}}></Input.Search>
            <Button type="primary" style={{marginLeft : '5px',height:'32px',width:'90px'}}>搜索</Button>
          </div>
        </Tabs.TabPane>
      </Tabs>
    )
  }
}