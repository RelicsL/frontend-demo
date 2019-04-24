import React from 'react';
import './index.scss'
import { Tabs, Input, Button, Table } from 'antd';
import { observer } from 'mobx-react';
import { observable, action } from 'mobx'
import { showError } from '../../components/Message';
import { api } from '../../api';

@observer
export class Search extends React.Component{

  @observable searchIpt = '';
  @observable tableData = [];
  @observable loading = false;

  @action
  setSearchIpt(val){
    this.searchIpt  = val;
  }

  @action
  setTableData(val){
    this.tableData = val;
  }

  @action
  setLoading(val){
    this.loading = val;
  }
  
  onSearchChange = (e) => {
    this.setSearchIpt(e.target.value);
  }

  onSearch = async() => {
    this.setLoading(true);
    if(this.searchIpt.length === 0){
      showError('搜索内容不能为空！')
    }else{
      try {
        const d = await api.searchUser(this.searchIpt);
        if(d.length){
          d[0].key = d[0]._id;
          this.setTableData(d);
        }else{
          this.setTableData([]);
          showError('用户不存在');
        }
      }catch(e){
        showError(e)
      }
    }
    this.setLoading(false);
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
    return this.tableData;
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
              onKeyDown={(e)=>{e.keyCode === 13 && this.onSearch() }}
            />
            <Button loading={this.loading} onClick={this.onSearch} type="primary" className="search-btn">搜索</Button>
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