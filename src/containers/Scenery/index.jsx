import React from 'react';
import './index.scss';
import { Tabs, Card } from 'antd';

export class Scenery extends React.Component{

  get dataSource(){
    return [
      {
        title:'学校全景',
        img:'http://www.ahszu.edu.cn/Article/UploadFiles/200809/2008090517474007.jpg',
      },
      {
        title:'教学楼一角',
        img:'http://www.ahszu.edu.cn/Article/UploadFiles/200805/20080515223351925.JPG',
      },
      {
        title:'图书馆',
        img:'http://www.ahszu.edu.cn/Article/UploadFiles/200805/20080515223351371.JPG',
      },
      {
        title:'鸟瞰体育场',
        img:'http://www.ahszu.edu.cn/Article/UploadFiles/200805/20080515223351566.JPG',
      },
      {
        title:'珍珠湖1',
        img:'http://www.ahszu.edu.cn/Article/UploadFiles/200805/20080515223351457.JPG',
      },
      {
        title:'学生宿舍楼1',
        img:'http://www.ahszu.edu.cn/Article/UploadFiles/200805/20080515223351618.JPG',
      },
      {
        title:'珍珠湖2',
        img:'http://www.ahszu.edu.cn/Article/UploadFiles/200805/20080515223352979.jpg',
      },
      {
        title:'美丽校园',
        img:'http://www.ahszu.edu.cn/Article/UploadFiles/200805/20080515223352571.JPG',
      },
      {
        title:'校园一角',
        img:'http://www.ahszu.edu.cn/Article/UploadFiles/200805/20080515223352212.JPG',
      },
      {
        title:'珍珠湖-亭',
        img:'http://www.ahszu.edu.cn/Article/UploadFiles/200805/20080515223353357.JPG',
      },
      {
        title:'珍珠湖3',
        img:'http://www.ahszu.edu.cn/Article/UploadFiles/200805/20080515223353261.JPG',
      },
      {
        title:'美丽的校园',
        img:'http://www.ahszu.edu.cn/Article/UploadFiles/200805/20080515223353671.JPG',
      },
      {
        title:'校园一角',
        img:'http://www.ahszu.edu.cn/Article/UploadFiles/200805/20080515223353656.JPG',
      },
      {
        title:'二冬大道',
        img:'http://www.ahszu.edu.cn/Article/UploadFiles/200809/2008090517530724.jpg',
      },
      {
        title:'嘉言桥',
        img:'http://www.ahszu.edu.cn/Article/UploadFiles/200809/2008090517544575.jpg',
      },
      {
        title:'学生宿舍楼2',
        img:'http://www.ahszu.edu.cn/Article/UploadFiles/200809/2008090517555547.jpg',
      },
    ]
  }

  render(){
    return (
      <Tabs>
        <Tabs.TabPane tab="校园风光" key="校园风光" className="scenery-box">
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
          
        </Tabs.TabPane>
      </Tabs>
    )
  }
}