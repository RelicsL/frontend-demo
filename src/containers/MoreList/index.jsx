import React from 'react';
import { baseInject } from '../../components/History/history';
import { Tabs, List, Avatar } from 'antd';
import { Link } from 'react-router-dom';


@baseInject
export class MoreList extends React.Component{

  get pid () {
    return this.props.match.params.pid
  }

  get dataSource(){
    return [
      {
        id : 1 ,
        title: '我校召开党委理论学习中心组学习会',
        discription:'4月4日下午，我校召开党委理论学习中心组学习会，校党委书记陈国龙主持会议，党委副书记、校长张莉，党委副书记蔡之让，副校长李亮、梁琦、张英彦，纪委书记王俊，办公室、纪委办、组织部、宣传部负责人等中心组成员参加会议。',
        img: 'http://www.ahszu.edu.cn/Article/UploadFiles/201904/2019040416445721.jpg',
      },
      {
        id : 2 ,
        title: '我校组织收看“安徽省劳动模范工匠大师进校园”直播活动',
        discription:'4月3日，由省委宣传部、省委教育工委、省总工会等部门联合举办的“安徽省劳动模范工匠大师进校园”活动在合肥举行，我校党委副书记蔡之让，宣传部、学工部、团委负责人及学生代表300余人在逸夫楼第二会议室集中收看了此次活动直播，各二级学院分别结合本单位实际采取了多种形式组织学生观看。',
        img: 'http://www.ahszu.edu.cn/Article/UploadFiles/201904/2019040416182300.jpg',
      },
      {
        id : 3 ,
        title: '外国语学院党总支召开总支委员扩大会议',
        discription:'4月8日，外国语学院党总支召开总支委员扩大会议，外国语学院院长李加强、党总支支委、科级干部及教研室主任参加会议，会议由外国语学院党总支副书记、副院长郝景东主持。',
        img: 'http://www.ahszu.edu.cn/Article/UploadFiles/201904/20190409124006408.jpg',
      },
      {
        id : 4 ,
        title: '环测学院召开学生工作会议',
        discription:'4月3日上午，环测学院在工科楼会议室召开学生工作会议。党总支书记袁新田主持会议，党总支副书记胡冰及全体班主任参加。',
        img: 'http://www.ahszu.edu.cn/Article/UploadFiles/201904/2019040417521893.jpg',
      },
      {
        id : 5 ,
        title: '我校召开党委理论学习中心组学习会',
        discription:'4月4日下午，我校召开党委理论学习中心组学习会，校党委书记陈国龙主持会议，党委副书记、校长张莉，党委副书记蔡之让，副校长李亮、梁琦、张英彦，纪委书记王俊，办公室、纪委办、组织部、宣传部负责人等中心组成员参加会议。',
        img: 'http://www.ahszu.edu.cn/Article/UploadFiles/201904/2019040416445721.jpg',
      },
      {
        id : 6 ,
        title: '我校组织收看“安徽省劳动模范工匠大师进校园”直播活动',
        discription:'4月3日，由省委宣传部、省委教育工委、省总工会等部门联合举办的“安徽省劳动模范工匠大师进校园”活动在合肥举行，我校党委副书记蔡之让，宣传部、学工部、团委负责人及学生代表300余人在逸夫楼第二会议室集中收看了此次活动直播，各二级学院分别结合本单位实际采取了多种形式组织学生观看。',
        img: 'http://www.ahszu.edu.cn/Article/UploadFiles/201904/2019040416182300.jpg',
      },
      {
        id : 7 ,
        title: '外国语学院党总支召开总支委员扩大会议',
        discription:'4月8日，外国语学院党总支召开总支委员扩大会议，外国语学院院长李加强、党总支支委、科级干部及教研室主任参加会议，会议由外国语学院党总支副书记、副院长郝景东主持。',
        img: 'http://www.ahszu.edu.cn/Article/UploadFiles/201904/20190409124006408.jpg',
      },
      {
        id : 8 ,
        title: '环测学院召开学生工作会议',
        discription:'4月3日上午，环测学院在工科楼会议室召开学生工作会议。党总支书记袁新田主持会议，党总支副书记胡冰及全体班主任参加。',
        img: 'http://www.ahszu.edu.cn/Article/UploadFiles/201904/2019040417521893.jpg',
      },
      {
        id : 9 ,
        title: '我校召开党委理论学习中心组学习会',
        discription:'4月4日下午，我校召开党委理论学习中心组学习会，校党委书记陈国龙主持会议，党委副书记、校长张莉，党委副书记蔡之让，副校长李亮、梁琦、张英彦，纪委书记王俊，办公室、纪委办、组织部、宣传部负责人等中心组成员参加会议。',
        img: 'http://www.ahszu.edu.cn/Article/UploadFiles/201904/2019040416445721.jpg',
      },
      {
        id : 10 ,
        title: '我校组织收看“安徽省劳动模范工匠大师进校园”直播活动',
        discription:'4月3日，由省委宣传部、省委教育工委、省总工会等部门联合举办的“安徽省劳动模范工匠大师进校园”活动在合肥举行，我校党委副书记蔡之让，宣传部、学工部、团委负责人及学生代表300余人在逸夫楼第二会议室集中收看了此次活动直播，各二级学院分别结合本单位实际采取了多种形式组织学生观看。',
        img: 'http://www.ahszu.edu.cn/Article/UploadFiles/201904/2019040416182300.jpg',
      },
      {
        id : 11 ,
        title: '外国语学院党总支召开总支委员扩大会议',
        discription:'4月8日，外国语学院党总支召开总支委员扩大会议，外国语学院院长李加强、党总支支委、科级干部及教研室主任参加会议，会议由外国语学院党总支副书记、副院长郝景东主持。',
        img: 'http://www.ahszu.edu.cn/Article/UploadFiles/201904/20190409124006408.jpg',
      },
      {
        id : 12 ,
        title: '环测学院召开学生工作会议',
        discription:'4月3日上午，环测学院在工科楼会议室召开学生工作会议。党总支书记袁新田主持会议，党总支副书记胡冰及全体班主任参加。',
        img: 'http://www.ahszu.edu.cn/Article/UploadFiles/201904/2019040417521893.jpg',
      },
    ]
  }

  render(){
    const title = this.pid === 'learning' ? '学术' : '新闻';
    return (
      <Tabs>
        <Tabs.TabPane key={title} tab={`${title}列表`}>
        <div className="list-box" style={{padding:'0 50px'}}>
          <List
            itemLayout="horizontal"
            dataSource={this.dataSource}
            pagination="bottom"
            renderItem={item => (
              <List.Item>
                <List.Item.Meta
                  avatar={<Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />}
                  title={<Link to={`/learning/detail/${item.id}`}>{item.title}</Link>}
                  description={item.discription}
                />
              </List.Item>
            )}
          />
        </div>
        </Tabs.TabPane>
      </Tabs>
    )
  }
}