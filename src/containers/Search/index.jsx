import React from 'react';
import './index.scss'
import { Tabs, Input, Button, Table } from 'antd';
import { observer } from 'mobx-react';
import { observable, action } from 'mobx'
import { showError } from '../../components/Message';

@observer
export class Search extends React.Component{

  @observable searchIpt = '';

  @action
  setSearchIpt(val){
    this.searchIpt  = val;
  }

  onSearchChange = (e) => {
    this.setSearchIpt(e.target.value);
  }

  onSearch = () => {
    if(this.searchIpt.length === 0){
      showError('搜索内容不能为空！')
    }
  }

  get columns(){
    return [
      {
        key : 'name',
        dataIndex : 'name',
        title : '姓名',
        width : '25%',
        align : 'center',
      },
      {
        key : 'date',
        dataIndex : 'date',
        title : '入学时间',
        width : '25%',
        align : 'center',
      },
      {
        key : 'tie',
        dataIndex : 'tie',
        title : '系别',
        width : '25%',
        align : 'center',
      },
      {
        key : 'class',
        dataIndex : 'class',
        title : '班级',
        width : '25%',
        align : 'center',
      },
    ]
  }

  get dataSource(){
    return [
      {
        key : 1,
        name : '张三',
        date : '2012/09/12',
        tie : '信息工程学院',
        class : '12计科',
      },
    ]
  }

  render(){
    return (
      <Tabs>
        <Tabs.TabPane tab="用户查找" key="用户查找" >
          <div className="search-box">
            <Input.Search
              className="search-input"
              placeholder="请输入用户名"
              onChange={this.onSearchChange}  
              value={this.searchIpt}
            />
            <Button onClick={this.onSearch} type="primary" className="search-btn">搜索</Button>
          </div>
          <div className="result-box">
            <div className="result-table">
              <Table columns={this.columns} dataSource={this.dataSource} locale={{ emptyText : '暂无查询结果'}} />
            </div>
          </div>
        </Tabs.TabPane>
      </Tabs>
    )
  }
}