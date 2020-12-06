import React from 'react'
import PropTypes from 'prop-types'

// cnpm install prop-types -S

// 给类组件加props类型校验
class Child1 extends React.Component{
  render(){
    let { list,msg,onChange }=this.props
    return(
      <div>
        <h2>我是child1组件</h2>
        {
          list.map(ele=>(
            <div key={ele}>{ele}</div>
          ))
        }
        <h2 onClick={()=>onChange()}>{msg}</h2>
      </div>
    )
  }
}
// 给函数式组件加props类型校验
const Child2 =props=>(
  <div>
    <h2>我是child2组件</h2>
    <h2>{props.age}</h2>
  </div>
)
Child1.propTypes={
  list:PropTypes.array.isRequired,
  msg:PropTypes.string.isRequired,
  onChange:PropTypes.func.isRequired,
  gender:PropTypes.oneOf(['男','女']).isRequired
}
Child2.propTypes={
  age:PropTypes.number.isRequired,
}
class TestTypes extends React.Component{
  render(){
    return(
      <React.Fragment>
        <div>
          <hr></hr>
          <h1>测试数据类型</h1>
          <hr></hr>
          <Child1 
            list={[1,2,3]}
            msg={'shawn'}
            onChange={()=>console.log('shawn')}
            gender={'男'}
          />
          <Child2 age={9}/>
        </div>
      </React.Fragment>
    )
  }
}

export default TestTypes
