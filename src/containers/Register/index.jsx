import React from 'react';
import { Tabs, Form, Input, Icon, Checkbox, Button } from 'antd';
import { Link } from 'react-router-dom/cjs/react-router-dom';


class RegisterForm extends React.Component{

  onSubmit = async(e) => {
    e.preventDefault()
    this.props.form.validateFields((err)=>{
      if(!err){
        const values = this.props.form.getFieldsValue()
        console.log('success',values)
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
              label="学号"
            >
              {
                getFieldDecorator('studentId',{
                  rules: [
                    { required:'number',message:'请输入学号'},
                    { len:10,message:'学号长度为10'},
                    {pattern:/^[0-9]*$/,message:'手机号为纯数字'},
                  ]
                })(
                  <Input placeholder="请输入学号" />
                )
              }
            </Form.Item>
            <Form.Item
              label="手机号"
            >
              {
                getFieldDecorator('phone',{
                  rules: [
                    { required:'number',message:'请输入手机号'},
                    { len:11,message:'手机号为10位的纯数字'},
                    { pattern:/^[0-9]*$/,message:'手机号为纯数字' },
                  ]
                })(
                  <Input placeholder="请输入手机号" />
                )
              }
            </Form.Item>
            <Form.Item>
              <Button style={{marginLeft:'680px'}} type="primary" htmlType="submit">注册</Button>
            </Form.Item>
          </Form>
        </Tabs.TabPane>
      </Tabs>
    )
  }
}
export const Register = Form.create()(RegisterForm)