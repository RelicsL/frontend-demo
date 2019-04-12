import React from 'react';
import { baseInject } from '../../components/History/history';
import { Tabs, Typography } from 'antd';
import './index.scss';
import { api } from '../../api';
import { observable, action } from 'mobx';

@baseInject
export class Detail extends React.Component{

  @observable detailData = [];

  @action
  setDetailData(val){
    this.detailData = val;
  }

  get pid () {
    return this.props.match.params.pid;
  }

  get did () {
    return this.props.match.params.did;
  }

  get dataSource(){
    return this.detailData[0];
      
  }

  async componentWillMount(){
    const d = await api.getDetail(this.pid,this.did)
    this.setDetailData(d)
  }

  render(){
    const title = this.pid === 'learning' ? '学术' : '新闻';
    const { Title, Paragraph } = Typography;
    return (
      <Tabs>
        <Tabs.TabPane key={title} tab={`${title}详情`}>
          {
            this.detailData.length ? <Typography className="detail-box">
              <Title className="title">{this.dataSource.title}</Title>
              <Paragraph className="desc">{this.dataSource.discription}</Paragraph>
              {
                this.dataSource.img ? <img src={this.dataSource.img} /> : null
              }
              <Paragraph className="content">{this.dataSource.content}</Paragraph>
            </Typography> : null
          }
        </Tabs.TabPane>
      </Tabs>
    )
  }
}