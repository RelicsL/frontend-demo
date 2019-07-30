import React from 'react';
import { Link } from 'react-router-dom';
import { Layout, Carousel, Tabs, List, Avatar, Icon, Spin } from 'antd';
import { api } from '../../api';
import { observer } from 'mobx-react';
import { action, observable } from 'mobx';
import { showError, getError } from '../../components/Message';

@observer
export class Learning extends React.Component{

  @observable listData = [];

  @action
  setListData(val){
    this.listData = val;
  }

  get dataSource(){
    return this.listData.slice(0,4);
  }

  async componentWillMount() {
    try {
      const d = await api.getListData('learning');
      this.setListData(d);
    } catch (err) {
      showError(getError(err));
    }
  }

  render(){
    return (
      <Tabs className="tabs">
        <Tabs.TabPane tab="校友学术" key="校友学术">
          <Spin spinning={!this.dataSource.length} size="large" tip="加载中">
            <Layout className="box">
              <Layout.Sider theme="light" className="sider" width="420px">
                <Carousel autoplay>
                {this.dataSource.map((val,index)=><div key={index} className="carouse-item">
                    <Link to={`/learning/detail/${val._id}`}>
                      <img src={val.img}/>  
                    </Link>
                    <p>{val.title}</p>
                  </div>)}
                </Carousel>
                <img className="sider-img" src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1554831176356&di=e23391a2ede2e09e18d502662783a1de&imgtype=0&src=http%3A%2F%2Fimg.gaosan.com%2Fupload%2F201706%2F6363339088504582628748808.jpg"/>
              </Layout.Sider>
              <Layout.Content className="content">
                <List
                  itemLayout="horizontal"
                  dataSource={this.dataSource}
                  locale={{emptyText:'暂无数据'}}
                  renderItem={item => (
                    <List.Item>
                      <List.Item.Meta
                        title={<Link to={`/learning/detail/${item._id}`}>{item.title}</Link>}
                        description={item.discription}
                      />
                    </List.Item>
                  )}
                />
                <p className="more"><Link to="/learning/list">查看更多<Icon type="right"/></Link></p> 
              </Layout.Content>
            </Layout>
          </Spin>
        </Tabs.TabPane>
      </Tabs>
    )
  }
}