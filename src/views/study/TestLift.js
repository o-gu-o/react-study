import React from 'react'

function ChildA (props){
  let{count} =props
  return (
    <div>
      <h3>ChildA</h3>
      <h3>{count}</h3>
      <button onClick={()=>props.onPlus(4)}>自增</button>
    </div>
  )
}
function ChildB (props){
  let{count} =props
  return (
    <div>
      <h3>ChildB</h3>
      <h3>{count}</h3>
      <button onClick={()=>props.onReduce(4)}>自减</button>
    </div>
  )
}

// 当兄弟组件之间需要共享一些状态（数据）时
// 我们的做法是把这些需要共享的状态，定义在他们共同的父组件中
// 这种做法就叫做“状态提升”
export default class TestLift extends React.Component{
  constructor(props){
    super(props)
    this.state={
      count:0  // 两个子组件需要共享这个状态（数据）
    }
  }
  render(){
    let{count} =this.state
    return(
      <div>
        <h1>测试状态提升</h1>
        <hr/>

        <ChildA count={count} onPlus={(num)=>this.setState(state=>({count:state.count+num}))}/>
        <ChildB count={count} onReduce={(num)=>this.setState(state=>({count:state.count-num}))}/>

      </div>
    )
  }
}