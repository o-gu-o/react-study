import React from 'react'

// 粗粒度的权限管理
// 细粒度的权限管理
export default function roleHoc(WrappedComponent){
  return class extends React.Component{
    constructor(props){
      super(props)
      this.state={
        userinfo:{}
      }
    }
    componentDidMount(){
      this.setState({userinfo:{
        role:1,
        mobile:'13123213',
        username:'shawn'
      }})
    }
    render(){
      let { userinfo } = this.state
      let props=this.props
      return(
        <div>
          <WrappedComponent userinfo={userinfo}{...props}/>
        </div>
      )
    }
  }
}