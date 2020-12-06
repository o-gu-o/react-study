import React from 'react'

function CountChild(props){
  return(
    <h1>{props.num}</h1>
  )
}

export default class TestEvent extends React.Component{
  constructor(props){
    super(props)
    // state特点：当state发生变化时，视图自动更新
    this.state={
      count:0
    }
    this.xxxx = this.addHandler.bind(this)
  }
  // ES5：使用bind()方式绑定的事件处理器，它的最后一个形参就是事件对象
  addHandler(q,w,e){
    // console.log('+')
    // console.log(q,w,e)
    // count的新值是由旧值计算而来时，不要使用这种写法
    // this.setState({count: this.state.count+1})
    // setState() 更新state，触发Diff运算、更新视图
    // setState()是React组件中，专门用于更新state的

    // ES5写法
    this.setState((state,props)=>{
      // console.log('state',state)
      // console.log('props',props)
      return {count:state.count+1}  // 返回一个新的虚拟DOM（vm）
    })
  }
  // ES6：使用箭头函数来绑定事件处理器，不用考虑this指向问题了
  // this就指向当前箭头函数所在类的实例对象
  subHandler(q,w,e){
    // console.log('-')
    // console.log(q,w,e)
    // ES6写法（推荐）
    this.setState((state,props)=>({count:state.count-1}))
  }
  render(){
    let { count } = this.state
    return(
      <div>
        <h1>测试事件</h1>
        {/* 把count这个state变量，通过props传递给子组件 */}
        <CountChild num={count} />
        {/* 绑定事件的第1种方法：使用bind(this)来改变this指向 */}
        <button onClick={this.addHandler.bind(this,1,2)}>+</button>
        <button onClick={this.xxxx}>++</button>
        {/* 绑定事件的第2种方法：使用箭头函数，它的this指向所在类的实例 */}
        <button onClick={(e)=>this.subHandler(1,2,e)}>-</button>
      </div>
    )
  }
}
