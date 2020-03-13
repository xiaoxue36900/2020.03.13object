import React,{Component} from "react"
import {Button} from "antd"
export default class App extends Component{
  render(){
    return(
      <div>
        App
        <br/>
        <div>
    <Button type="primary" block>
      Primary
    </Button>
    <Button block>Default</Button>
    <Button type="dashed" block>
      Dashed
    </Button>
    <Button type="link" block>
      Link
    </Button>
  </div>,
      </div>
    )
  }
}