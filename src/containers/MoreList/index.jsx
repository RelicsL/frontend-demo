import React from 'react';
import { baseInject } from '../../components/History/history';
import { Tabs, List, Avatar, Spin } from 'antd';
import { Link } from 'react-router-dom';
import { api } from '../../api';
import { observable, action } from 'mobx';


@baseInject
export class MoreList extends React.Component{

  @observable listData = [];

  @action
  setListData(val){
    this.listData = val;
  }

  get pid () {
    return this.props.match.params.pid
  }

  get dataSource(){
    return this.listData;
  }

  async componentWillMount(){
    const d = await api.getListData(this.pid);
    this.setListData(d)
  }

  render(){
    const title = this.pid === 'learning' ? '学术' : '新闻';
    return (
      <Tabs>
        <Tabs.TabPane key={title} tab={`${title}列表`}>
        <div className="list-box" style={{padding:'0 50px'}}>
          <Spin spinning={!this.dataSource.length} size="large" tip="加载中">
            <List
              itemLayout="horizontal"
              dataSource={this.dataSource}
              pagination="bottom"
              locale={{emptyText:'暂无数据'}}
              renderItem={item => (
                <List.Item>
                  <List.Item.Meta
                    avatar={<Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />}
                    title={<Link to={`/${this.pid}/detail/${item.id}`}>{item.title}</Link>}
                    description={item.discription}
                  />
                </List.Item>
              )}
            />
          </Spin>
        </div>
        </Tabs.TabPane>
      </Tabs>
    )
  }
}