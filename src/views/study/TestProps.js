import React,{Component} from 'react'
// 在JSX中可以直接嵌套一个由React元素构成的数组
const eleArr = [
  <div key='1'>1</div>,
  <div key='2'>2</div>,
  <div key='3'>3</div>
]

// props是父子组件之间的纽带，是只读的，不要把props赋值给state，反之同理
// React类名及组件的命名都要用驼峰命名
// 类组件：用class关键词定义的组件
// 特点1：它有state
// 特点2：它有生命周期
// 特点3：它有上下文、ref、this等特性
// 特点4：与函数式组件相比，性能较差
class TestProps extends Component{
  // 构造器，也是一个生命周期
  // 当react类被实例化变成react元素（JSX）时调用
  constructor(props){
    super(props)  //调用父类的构造器，必须是构造器函数的第一行代码
    // 状态，相当于vue中的声明式data
    // state特点：当state变化时，视图自动更新
    this.state={
      msg:'hello state'
    }
    console.log(props)
  }
  // render() 是类组件必须的一个生命周期
  // 它表示，在真实DOM将要渲染的视图结构
  render(){
    let {msg} = this.state
    let {hello,bol,arr,obj,ele} = this.props
    return(
      <div>
        <h1>测试props</h1>
        <hr/>
        {/* 把state变量渲染到真实的DOM上 */}
        <h2>{msg}</h2>
        {/* 把props外部数据渲染到真实的DOM上 */}
        <h2>{hello}</h2>
        {/* 在JSX中，可以直接渲染一个由React元素构成的数组变量 */}
        { eleArr }
        {bol && arr.map((ele,inx)=><div key={inx}>{ele}</div>)}
        <div>
          <span>{obj.a}</span>
          <span>{'===='}</span>
          <span>{obj.b}</span>
        </div>
        {ele}
      </div>
    )
  }
}


// 函数式组件：用function关键字或箭头函数定义的组件
// 特点1：没有state，所以被为“无状态组件”
// 特点2：没有生命周期
// 特点3：没有上下文、ref、this 等特性
// 特点4：与类组件相比，性能更高
export default (props)=>{
  let {hello,bol,arr,obj,ele} = props
  return(
    <div>
      <h1>测试props</h1>
      <hr/>
      {/* 把state变量渲染到真实的DOM上 */}
      {/*<h2>{msg}</h2>*/}
      {/* 把props外部数据渲染到真实的DOM上 */}
      <h2>{hello}</h2>
      {/* 在JSX中，可以直接渲染一个由React元素构成的数组变量 */}
      { eleArr }
      {bol && arr.map((ele,inx)=><div key={inx}>{ele}</div>)}
      {bol &&<div>
        <span>{obj.a}</span>
        <span>{'===='}</span>
        <span>{obj.b}</span>
      </div>}
      {ele}
    </div>
  )
}
