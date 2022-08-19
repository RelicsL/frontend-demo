import React from 'react';
import { baseInject } from '../../components/History/history';
import { Tabs, Typography, Input, Button, List } from 'antd';
import './index.less';
import { api } from '../../api';
import { observable, action, toJS } from 'mobx';
import { showError, showMessage, getError } from '../../components/Message'

@baseInject
export class Detail extends React.Component{

  @observable detailData = [];
  @observable iptVaule = "";
  @observable loading = false;

  @action
  setDetailData(val){
    this.detailData = val;
  }

  @action
  setIptValue(val) {
    this.iptVaule = val;
  }
  
  @action
  setLoading(val) {
    this.loading = val;
  }

  onChange = (e) => {
    this.setIptValue(e.target.value);
  }

  onSubmit = async() => {
    if (this.iptVaule.trim().length) {
      this.setLoading(true);
      await api.addComment(this.iptVaule,this.did);
      const d = await api.getDetail(this.pid, this.did);
      this.setDetailData(d);
      this.setLoading(false);
      this.setIptValue('');
      showMessage('发布成功！');
    } else {
      showError('评论不能为空！');
    }
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

  deleteComment = async (index, did) => {
    await api.deleteComment(index, did);
    const d = await api.getDetail(this.pid, this.did);
    this.setDetailData(d);
    showMessage('操作成功');
  }

  async componentWillMount() {
    try {
      const d = await api.getDetail(this.pid, this.did);
      this.setDetailData(d);
    } catch (err) {
      showError(getError(err));
    }
  }

  render(){
    let title;
    if (this.pid === 'learning') {
      title = "学术";
    } else if (this.pid === 'news') {
      title = "新闻";
    } else {
      title = "论坛";
    }

    const { Title, Paragraph } = Typography;
    return (
      <Tabs>
        <Tabs.TabPane key={title} tab={`${title}详情`}>
          {
            this.detailData.length ? <Typography className="detail-box">
              <Title className="content-title">{this.dataSource.title}</Title>
              <p className="author-box">{this.dataSource.author ? `作者：${this.dataSource.author}` : ''}</p>
              <Paragraph className="desc">{this.dataSource.discription || this.dataSource.desc}</Paragraph>
              {
                this.dataSource.img ? <img src={this.dataSource.img} /> : null
              }
              <Paragraph className="content">{this.dataSource.content}</Paragraph>
              {
                this.pid === 'forum' ? <div className="comment-box">
                  <hr/>
                  <h4>评论:</h4>
                  <Input.TextArea value={this.iptVaule} onChange={this.onChange} className="comment-text" placeholder="赶快发表评论吧！" />
                  <div className="btn-wrapper">
                    <Button loading={this.loading} type="primary" onClick={this.onSubmit}>
                      发布
                    </Button>
                  </div>
                  <List
                    itemLayout="horizontal"
                    dataSource={toJS(this.dataSource.comments)}
                    pagination={toJS(this.dataSource.comments).length ? 'bottom' : undefined}
                    locale={{ emptyText: '暂无评论' }}
                    renderItem={(item, index)=> (
                      <List.Item>
                        <List.Item.Meta
                          title={<span className="comment-author">{`#${index + 1}楼 ${item.author}`}</span>}
                          description={<div>{item.comment}</div>}
                        />
                        {this.props.stores.username === this.dataSource.author || item.author === this.props.stores.username ?
                          <a onClick={()=>this.deleteComment(index,this.did)}>删除</a> : null}
                      </List.Item>
                    )}
                  />
                </div> : null
              }
            </Typography> : null
          }
        </Tabs.TabPane>
      </Tabs>
    )
  }
}