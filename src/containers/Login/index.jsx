import React from 'react';
import { Tabs, Form, Input, Icon, Checkbox, Button } from 'antd';
import { Link } from 'react-router-dom/cjs/react-router-dom';


class LoginForm extends React.Component{

  login = async(e) => {
    e.preventDefault()
    const values = this.props.form.getFieldsValue()
    this.props.form.validateFields((err)=>{
      console.log(err)
    })
  }

  render(){
    const { getFieldDecorator } = this.props.form;
    return (
      <Tabs>
        <Tabs.TabPane tab="登陆" key="login" style={{ paddingTop : '20px' }}>
          <Form
            onSubmit={this.login}
            labelCol={{span : 2 , offset : 5}}
            wrapperCol={{span : 10}}
          >
            <Form.Item
              label="用户名"
            >
              {
                getFieldDecorator('name',{
                  rules : [
                    { required : true, message : '请输入用户名' },
                    { max : 56, message : '用户名不得超过56个字符' }
                  ]
                })(
                  <Input prefix={<Icon type="user"/>} placeholder="请输入用户名" />
                )
              }
            </Form.Item>
            <Form.Item
              label="密码"
            >
              {
                getFieldDecorator('password',{
                  rules : [
                    { required : true, message : '请输入密码' },
                  ]
                })(
                  <Input prefix={<Icon type="lock"/>} placeholder="请输入密码" />
                )
              }
            </Form.Item>
            <Form.Item
              wrapperCol={{offset : 7}}
            >
              {
                getFieldDecorator('remember',{ })(
                  <Checkbox>记住密码</Checkbox>
                )
              }
              <span style={{ fontSize : '12px' }}>没有账号？<Link to="/register">去注册></Link></span>
              <Button type="primary" htmlType="submit" style={{marginLeft:"135px"}} >登陆</Button>
            </Form.Item>
          </Form>
        </Tabs.TabPane>
      </Tabs>
    )
  }
}
export const Login = Form.create()(LoginForm)