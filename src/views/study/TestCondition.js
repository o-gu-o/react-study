import React from 'react'



export default class TestCondition extends React.Component{
  constructor(props){
    super(props)
    this.state={
      gender:1,
      numIdx:1,
      display:'d1',
      cssDis:'block',
      size:20,
      color:'red'
    }
  }
  // 自定义视图渲染方法
  renderNumDiv(){
    let {numIdx}=this.state
    let ele=null
    switch(numIdx){
      case 1:
        ele= <div key='1'>11</div>
      break;
      case 2:
        ele= <div key='2'>22</div>
      break;
      case 3:
        ele= <div key='3'>33</div>
      break;
      case 4:
        ele= <div key='4'>44</div>
      break;
      default:
    }
    return ele
  }
  // 自定义事件处理器
  change(key){
    switch(key){
      case "gender":
        this.setState(state=>{
          return {gender:state.gender===1?2:1}
        })
      break;
      case "numIdx":
        // this.setState({numIdx:Math.ceil(Math.random()*4)})
            this.setState(state=>{
              return {numIdx:state.numIdx===4?state.numIdx-3:state.numIdx+1}
          })
      break;
      case "display":
            this.setState(state=>{
              return {display:state.display==="d1" ? "d2" : "d1"}
          })
      break;  
      case "cssDis":
            this.setState(state=>{
              let colorArr=['red','orange','yellow','green','cyan','blue','purple','black']
              return{
                cssDis:state.cssDis==="block" ? "none" : "block",
                size:state.size+5,
                color:colorArr[Math.floor(Math.random()*colorArr.length)]
              } 
          })
      break; 
      default:
    }
  }
  render(){
    let { gender,numIdx,display,cssDis,size,color }=this.state
    return(
      <div>
        <h1>测试condition</h1>
        { /* 只有两个元素需要执行条件渲染，建议使用三元表达式 */ }
        {gender ===1 ? <div>女</div>:<div>男</div>}
        <button onClick={()=>this.change('gender')}>切换性别</button>
        <hr/>
        { /* 两个以的元素需要执行条件渲染，建议使用 && 来实现 */ }
        {numIdx ===1 && <div>1111</div>}
        {numIdx ===2 && <div>2222</div>}
        {numIdx ===3 && <div>3333</div>}
        {numIdx ===4 && <div>4444</div>}
        <hr/>
        {this.renderNumDiv()}
        <button onClick={()=>this.change('numIdx')}>切换数字</button>
        <hr/>
        {/* 用动态 className 实现条件渲染 */}
        <button onClick={()=>this.change('display')}>切换显藏</button>
        <div className={display}>qwer</div>
        <hr/>
        {/* 用动态 style 实现条件渲染 */}
        <button onClick={()=>this.change('cssDis')}>切换显藏</button>
        <div style={{color, fontSize:size+'px',display:cssDis}}>asdf</div>
      </div>
    )
  }
}