import React from 'react';
import { baseInject } from '../../components/History/history';
import { Tabs } from 'antd';


@baseInject
export class Detail extends React.Component{

  get pid () {
    return this.props.match.params.pid
  }

  render(){
    const title = this.pid === 'learning' ? '学术' : '新闻';
    return (
      <Tabs>
        <Tabs.TabPane key={title} tab={`${title}详情`}></Tabs.TabPane>
      </Tabs>
    )
  }
}