import React from 'react';
import { Tabs, Icon, Spin, List } from 'antd';
import './index.less';
import { Link } from 'react-router-dom';
import { observer } from 'mobx-react';
import { observable, action } from 'mobx';
import { api } from '../../api';

const IconText = ({ type, text , did}) => (
  <Link style={{color:'rgba(0,0,0,.65)'}} to={`/forum/detail/${did}`}>
    <Icon type={type} style={{ marginRight: 8 }} />
    {text}
  </Link>
);

@observer
export class Forum extends React.Component{

  @observable listData = [];

  @action
  setListData(val){
    this.listData = val;
  }

  get pid () {
    return 'learning'
  }

  get dataSource(){
    return this.listData;
  }

  async componentWillMount(){
    const d = await api.getForum();
    this.setListData(d)
  }

  render(){
    return (
      <Tabs className="tabs">
        <Tabs.TabPane tab="校友论坛" key="校友论坛">
          <div className="forum-box">
            <div className="go">
              <Link to="/forum/edit">点击去发帖<Icon type="right"/></Link>
            </div>
            <Spin spinning={!this.dataSource.length} size="large" tip="加载中">
              <List
                itemLayout="horizontal"
                dataSource={this.dataSource}
                pagination="bottom"
                locale={{emptyText:'暂无数据'}}
                renderItem={item => (
                  <List.Item actions={[<IconText type="message" text={item.comments.length} did={item._id} />]}>
                    <List.Item.Meta
                      title={<Link to={`/forum/detail/${item._id}`}>{item.title}</Link>}
                      description={item.desc}
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