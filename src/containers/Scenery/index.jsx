import React from 'react';
import './index.scss';
import { Tabs, Card, Spin } from 'antd';
import { action, observable } from 'mobx';
import { observer } from 'mobx-react';
import { api } from '../../api';

@observer
export class Scenery extends React.Component{
  @observable sceneryData = [];

  @action
  setSceneryData(val){
    this.sceneryData = val;
  }

  get dataSource(){
    return this.sceneryData;
  }

  async componentWillMount(){
    const d = await api.getScenery();
    this.setSceneryData(d)
  }

  render(){
    return (
      <Tabs>
        <Tabs.TabPane tab="校园风光" key="校园风光" className="scenery-box">
          <Spin spinning={!this.dataSource.length} size="large" tip="加载中...">  
            {
              this.dataSource.map((val,index)=>
              <a key={index} href={val.img} target="blank">
                <Card
                  hoverable
                  cover={<img src={val.img} />}
                >
                  <Card.Meta
                    title={val.title}
                  />
                </Card>
              </a>
              )
            }
          </Spin>
          
        </Tabs.TabPane>
      </Tabs>
    )
  }
}