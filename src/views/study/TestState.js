import React from 'react'



export default class TestState extends React.Component{
  constructor(props){
    super(props)
    this.state={
      count:100,
      price:10,
      total:0,
      a:1,
      b:2,
      c:3
    }
  }
  ChangeCount(){
    // setState()是React中专门用于更新VM，触发diff运算，更新视图
    // setState()默认是异步的，但在定时器中却是同步的
    // setState(fn1, [fn2]) fn1必须返回一个新的state，fn2表示更新state完成
    // setState({bol: true})
    setTimeout(() => {
      console.log('11111')
      this.setState((state,props)=>{
        return {count:state.count+1,price:state.price+1}
      },()=>{
        console.log('done')
      })
      console.log('22222')
    }, 500);
  }

  ChangeABC(){
    // 当有多个setState()执行时，React会自动将其合并，只执行一次diff运算、一次DOM更新
    this.setState({a:1000})
    this.setState({b:1000})
    this.setState({c:1000})
    this.setState({
      a:2000,
      b:2000,
      c:2000
    })
    this.setState({a:2000})
    this.setState({a:3000})
  }


  render(){
    let {count,price,total,a,b,c} =this.state

    return(
      <div>
        <h1>测试state</h1>
        <hr/>
        <h1>{count}</h1>
        <h1>{price}</h1>
        <h1>{count*price}</h1>

        <button onClick={()=>this.ChangeCount()}> 改变count </button>
        <hr/>

        <h1>{a}</h1>
        <h1>{b}</h1>
        <h1>{c}</h1>
        <button onClick={()=>this.ChangeABC()}> 改变ABC </button>
      </div>
    )
  }
}