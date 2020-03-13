import React,{Component} from "react"
import { Form, Input, Button, Checkbox } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import logo from "../login/imgs/logo.png"
import "./css/login.less"
export default class Login extends Component{
  /*
			用户名/密码的的合法性要求
				1). 必须输入
				2). 必须大于等于4位
				3). 必须小于等于12位
				4). 必须是字母、数字或下划线组成
		*/
// 表单提交的回调
  onFinish = values => {
    console.log('Received values of form: ', values);
  };
  // 密码自定义验证
  pwdValidator=(rule,value)=>{
    if(!value){
      return Promise.reject("密码不能为空")
    }else if(value.length < 4){
      return Promise.reject("密码必须大于等于4")
    }else if(value.length > 12){
      return Promise.reject("密码必须小于等于12")
    }else if(!(/^\w+$/).test(value)){
      return Promise.reject("密码必须是字母、数字或下划线组成")
    }
    return Promise.resolve()
  }
 
  render(){
    return(
      <div id="login">
        <header className="login-header">
          <img src={logo} alt=""/>
          <h2>商品管理系统</h2>
        </header>
        <div className='login-content'>
          <h3>用户登录</h3>
          <Form
            name="normal_login"
            className="login-form"
            initialValues={{
              remember: true,
            }}
            onFinish={this.onFinish}
          >
            <Form.Item 
              name="username"
              rules={[
                {required: true, message: '用户名必须输入' },
                {max:12,message:'用户名必须小于等于12位'},
                {min:4,message:'用户名必须大于等于4位'},
                {pattern:/^\w+$/,message:'用户名必须是字母、数字或下划线组成'}
            ]}
            >
              <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="用户名" />
            </Form.Item>
            <Form.Item 
              name="password"
              rules={[
                {validator:this.pwdValidator}
            ]}
            
            >
              <Input
                prefix={<LockOutlined className="site-form-item-icon" />}
                type="password"
                placeholder="密码"
              />
            </Form.Item>
            <Form.Item>
              <Button type="primary" htmlType="submit" className="login-form-button">
                登录
              </Button>
              
            </Form.Item>
          </Form>
        </div>
      </div>
    )
  }
}
