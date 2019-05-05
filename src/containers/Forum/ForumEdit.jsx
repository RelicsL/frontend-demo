import React from 'react';
import { Tabs, Form, Input, Button } from 'antd';
import { api } from '../../api';
import { showMessage } from '../../components/Message';
import { baseInject } from '../../components/History/history';

@baseInject
class ForumEditForm extends React.Component{

  onSubmit = (e) => {
    e.preventDefault();
    this.props.form.validateFields(async (err,values) => {
      if (!err) {
        await api.addForum(values);
        showMessage('发布成功');
        this.props.history.push('/forum')
      }
    })
  }

  render() {
    const getFieldDecorator = this.props.form.getFieldDecorator;
    return (
      <Tabs className="tabs">
        <Tabs.TabPane tab="发帖编辑" key="edit">
          <Form
            labelCol={{ span: 2, offset: 5 }}
            wrapperCol={{ span: 10 }}
            onSubmit={this.onSubmit}
          >
            <Form.Item label="标题">
              {getFieldDecorator('title', {
                rules: [
                  { transform: (value) => value && value.trim() },
                  { required: true, message: '标题不能为空' },
                  { max: 56, message: '标题不能超过56个字符' },
                ]
              })(
                <Input placeholder="请输入标题" />
              )}
            </Form.Item>
            <Form.Item label="描述">
              {getFieldDecorator('desc', {
                rules: [
                  { max: 256, message: '描述不能超过256个字符' },
                ]
              })(
                <Input.TextArea style={{ height: '100px' }} placeholder="请输入描述" />
              )}
            </Form.Item>
            <Form.Item label="内容">
              {getFieldDecorator('content', {
                rules: [
                  { transform: (value) => value && value.trim() },
                  { required: true, message: '内容不能为空' },
                ]
              })(
                <Input.TextArea style={{ height: '300px' }} placeholder="请输入描述" />
              )}
            </Form.Item>
            <Form.Item label=" ">
              <div style={{ textAlign: "right" }}>
                <Button type="primary" htmlType="submit">发布</Button>
              </div>
            </Form.Item>
          </Form>
        </Tabs.TabPane>
      </Tabs>
    )
  }
}
export const ForumEdit = Form.create()(ForumEditForm)