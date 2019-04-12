import React from 'react';
import { Tabs, Form, Input, Icon, Checkbox, Button } from 'antd';
import { Link } from 'react-router-dom/cjs/react-router-dom';
import { api } from '../../api';
import { showError, showMessage } from '../../components/Message';
import { baseInject } from '../../components/History/history';
import { cookie } from '../../components/Cookie'

@baseInject
class LoginForm extends React.Component{

  onSubmit = (e) => {
    e.preventDefault();
    this.props.form.validateFields(async(err)=>{
      if(!err){
        const values = this.props.form.getFieldsValue();
        const d = await api.login(values.name,values.password);
        if(d.success){
          showMessage('登陆成功');
          if(values.remember){
            cookie.setCookie('user',d.success.data.name,30);
          }else{
            cookie.setCookie('user',d.success.data.name)
          }
          this.props.history.push('/learning');
          this.props.stores.setUsername(d.success.data.name);
        }else{
          showError(d.error.msg);
        }
      }
    })
  }

  render(){
    const { getFieldDecorator } = this.props.form;
    return (
      <Tabs>
        <Tabs.TabPane tab="登陆" key="login" style={{ paddingTop : '20px' }}>
          <Form
            onSubmit={this.onSubmit}
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
                    { max : 20, message : '用户名不得超过20个字符' }
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
                    { max : 16, message : '密码不得超过16个字符' },
                    { min : 6, message : '密码不得少于6个字符' },
                  ]
                })(
                  <Input.Password prefix={<Icon type="lock"/>} placeholder="请输入密码" />
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