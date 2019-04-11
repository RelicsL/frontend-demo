import React from 'react';
import { Tabs, Form, Input, Icon, Button, DatePicker } from 'antd';
import { showMessage } from '../../components/Message';
import { observable, action } from 'mobx';
import { observer } from 'mobx-react';

@observer
class RegisterForm extends React.Component{
  @observable selectDate = '';

  onSubmit = async(e) => {
    e.preventDefault()
    this.props.form.validateFields((err)=>{
      if(!err){
        const values = this.props.form.getFieldsValue()
        console.log(values,this.selectDate)
        showMessage('注册成功！')
      }
    })
  }

  @action
  changeDate = (_,dataString) => {
    this.selectDate = dataString;
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
              label="系别"
            >
              {
                getFieldDecorator('tie',{
                  rules: [
                    { required:true,message:'请输入系别'},
                  ]
                })(
                  <Input placeholder="请输入系别" />
                )
              }
            </Form.Item>
            <Form.Item
              label="班级"
            >
              {
                getFieldDecorator('class',{
                  rules: [
                    { required:true ,message:'请输入班级'},
                  ]
                })(
                  <Input placeholder="请输入班级" />
                )
              }
            </Form.Item>
            <Form.Item
              label="入学时间"
            >
              {
                getFieldDecorator('date',{
                  rules: [
                    { required:'number',message:'请选择入学时间'},
                  ]
                })(
                  <DatePicker
                    format="YYYY/MM/DD"
                    placeholder="请选择入学时间" 
                    onChange={this.changeDate}
                  />
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