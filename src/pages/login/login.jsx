import React,{Component} from "react"
import logo from "../login/imgs/logo.png"
import "./css/login.less"
export default class Login extends Component{
  render(){
    return(
      <div id="login">
        <header className="login-header">
          <img src={logo} alt=""/>
          <h2>商品管理系统</h2>
        </header>
        <div className='login-content'>
          <h3>用户登录</h3>
        </div>
      </div>
    )
  }
}
